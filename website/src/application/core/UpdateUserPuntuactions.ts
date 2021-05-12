import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

type UserPuntuaction = {
  stars: number;
  description?: string;
  branchOfficeId: string;
  branchOfficeName: string;
};

class UpdateUserPuntuactions {
  public static exec = async (userId: string, puntuaction: UserPuntuaction) => {
    const db = firebase.firestore();
    const docRef = db.collection(FirebaseCollectionNames.client).doc(userId);

    try {
      const userPuntuactions = await db.runTransaction((transaction) => {
        return transaction.get(docRef).then((doc) => {
          const data = doc.data();

          const storedPuntuaction = [...data.puntuactions];
          const existsPuntuaction = storedPuntuaction.find(
            (v) => v.branchOfficeId === puntuaction.branchOfficeId
          );

          let newPuntuactions = [];

          const createdAt = firebase.firestore.Timestamp.now();

          if (existsPuntuaction) {
            newPuntuactions = storedPuntuaction.map((v) => {
              if (v.branchOfficeId === puntuaction.branchOfficeId) {
                return {
                  ...puntuaction,
                  createdAt,
                };
              }

              return v;
            });
          } else {
            newPuntuactions = [
              ...storedPuntuaction,
              {
                ...puntuaction,
                createdAt,
              },
            ];
          }

          transaction.update(docRef, { puntuactions: newPuntuactions });

          return newPuntuactions;
        });
      });

      return userPuntuactions;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default UpdateUserPuntuactions;
