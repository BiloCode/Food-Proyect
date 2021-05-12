import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";
import StarsAverage from "./StarsAvegare";

type PuntuactionType = {
  userId: string;
  stars: number;
  description: string;
  client: {
    profileImage: string;
    fullName: string;
  };
};

class CreatePuntuaction {
  public static exec = async (
    branchOfficeId: string,
    puntuactionData: PuntuactionType
  ) => {
    const db = firebase.firestore();
    const docRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(branchOfficeId);

    try {
      const uploadData = await db.runTransaction((transaction) => {
        return transaction.get(docRef).then((sfDoc) => {
          if (!sfDoc.exists) throw "Document Not Exists";

          const storedPuntuction = sfDoc.data().puntuactions;
          const existsPuntuaction = storedPuntuction.find(
            (v) => v.userId === puntuactionData.userId
          );

          let newPuntuactions = [];

          if (existsPuntuaction) {
            newPuntuactions = storedPuntuction.map((v) => {
              if (v.userId === puntuactionData.userId) {
                return {
                  ...v,
                  ...puntuactionData,
                  edited: true,
                  createdAt: firebase.firestore.Timestamp.now(),
                };
              }

              return v;
            });
          } else {
            newPuntuactions = [
              ...storedPuntuction,
              {
                ...puntuactionData,
                edited: false,
                createdAt: firebase.firestore.Timestamp.now(),
              },
            ];
          }

          const stars = StarsAverage.exec(newPuntuactions);

          transaction.update(docRef, {
            stars,
            puntuactions: newPuntuactions,
          });

          return {
            stars,
            puntuactions: newPuntuactions,
          };
        });
      });

      return uploadData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreatePuntuaction;
