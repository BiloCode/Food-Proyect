import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";

import StarAVG from "../utils/StarAVG";

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
      const uploadData = await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(docRef);

        if (!branchOffice.exists) throw "Document Not Exists";

        const bOfficeData = branchOffice.data();

        const savedPuntuaction = [...bOfficeData.puntuactions];
        const savedUPuntuactionsId = [...bOfficeData.userPuntuactionsId];
        const existsPuntuaction = savedUPuntuactionsId.includes(
          puntuactionData.userId
        );

        let newUPuntIds = [];
        let newPuntuactions = [];

        if (existsPuntuaction) {
          newUPuntIds = savedUPuntuactionsId;
          newPuntuactions = savedPuntuaction.map((v) => {
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
          newUPuntIds = [...savedUPuntuactionsId, puntuactionData.userId];

          newPuntuactions = [
            ...savedPuntuaction,
            {
              ...puntuactionData,
              edited: false,
              createdAt: firebase.firestore.Timestamp.now(),
            },
          ];
        }

        const stars = StarAVG.exec(newPuntuactions);

        transaction.update(docRef, {
          stars,
          userPuntuactionsId: newUPuntIds,
          puntuactions: newPuntuactions,
        });

        return {
          stars,
          userPuntuactionsId: newUPuntIds,
          puntuactions: newPuntuactions,
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
