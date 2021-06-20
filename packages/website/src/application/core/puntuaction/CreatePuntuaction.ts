import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";

import CreatePuntuactionInUser from "./CreatePuntuactionInUser";
import CreatePuntuactionInBranch from "./CreatePuntuactionInBranch";

import { NewPuntuactionType } from "application/types/NewPuntuactionType";

class CreatePuntuaction {
  public static exec = async (
    branchOfficeId: string,
    clientId: string,
    newPuntuaction: NewPuntuactionType
  ) => {
    const db = firebase.firestore();

    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(branchOfficeId);

    const clientRef = db
      .collection(FirebaseCollectionNames.client)
      .doc(clientId);

    try {
      const uploadData = await db.runTransaction(async (transaction) => {
        const client = (await transaction.get(clientRef)).data();
        const branchOffice = (await transaction.get(branchRef)).data();

        const newBData = CreatePuntuactionInBranch.exec(
          transaction,
          branchRef,
          {
            newPuntuaction,
            puntuactions: branchOffice.puntuactions,
            uPuntuactionsId: branchOffice.userPuntuactionsId,
          }
        );

        const newUData = CreatePuntuactionInUser.exec(transaction, clientRef, {
          puntuactionStored: client.puntuaction,
          newPuntuaction: {
            branchOfficeId,
            stars: newPuntuaction.stars,
            branchOfficeName: branchOffice.name,
            createdAt: newPuntuaction.createdAt,
            description: newPuntuaction.description,
          },
        });

        return {
          branchData: newBData,
          userPuntuaction: newUData,
        };
      });

      return uploadData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreatePuntuaction;
