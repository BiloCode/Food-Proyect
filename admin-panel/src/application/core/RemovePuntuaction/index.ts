import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import RemovePuntuactionInBranch from "./RemovePuntuactionInBranch";
import RemovePuntuactionInUser from "./RemovePuntuactionInUser";

class RemovePuntuaction {
  public static exec = async (branchOfficeId: string, userId: string) => {
    const db = firebase.firestore();

    const clientRef = db.collection(FirebaseCollectionNames.client).doc(userId);
    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(branchOfficeId);

    try {
      const transactionResult = await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(branchRef);
        const client = await transaction.get(clientRef);

        const branchData = branchOffice.data();
        const clientData = client.data();

        const newBData = RemovePuntuactionInBranch.exec(
          transaction,
          branchRef,
          {
            userId,
            puntuactions: branchData.puntuactions,
            userPuntuactionsId: branchData.userPuntuactionsId,
          }
        );

        const newUData = RemovePuntuactionInUser.exec(transaction, clientRef, {
          branchOfficeId,
          puntuaction: clientData.puntuaction,
        });

        return {
          userPuntuactions: newUData,
          branchData: newBData,
        };
      });

      return transactionResult;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default RemovePuntuaction;
