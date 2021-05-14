import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";
import { ClientPuntuactionData } from "application/types/ClientModelType";

class RemovePuntuactionInUser {
  public static exec = async (branchOfficeId: string, clientId: string) => {
    const db = firebase.firestore();
    const clientDocRef = db
      .collection(FirebaseCollectionNames.client)
      .doc(clientId);

    try {
      const transactionResult = await db.runTransaction(async (transaction) => {
        const client = await transaction.get(clientDocRef);

        const data = client.data();
        const storedBranchOfficeIds = data.puntuaction.branchOfficeIds;
        const storedPuntuactions = data.puntuaction.store;

        const puntuaction: ClientPuntuactionData = {
          branchOfficeIds: [...storedBranchOfficeIds].filter(
            (_id) => _id !== branchOfficeId
          ),
          store: [...storedPuntuactions].filter(
            (v) => v.branchOfficeId !== branchOfficeId
          ),
        };

        transaction.update(clientDocRef, { puntuaction });

        return puntuaction;
      });

      return transactionResult;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default RemovePuntuactionInUser;
