import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

class RemovePuntuaction {
  public static exec = async (branchOfficeId: string, userId: string) => {
    const db = firebase.firestore();
    const branchDocRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(branchOfficeId);

    try {
      const transactionResult = await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(branchDocRef);

        const storedPuntuactions = branchOffice.data().puntuactions;
        const puntuactions = [...storedPuntuactions].filter(
          (v) => v.userId !== userId
        );

        transaction.update(branchDocRef, { puntuactions });

        return true;
      });

      return transactionResult;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default RemovePuntuaction;
