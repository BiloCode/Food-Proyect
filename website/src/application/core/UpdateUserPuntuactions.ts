import { ClientPuntuactionData } from "application/types/ClientModelType";
import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

type UserPuntuaction = {
  stars: number;
  description?: string;
  branchOfficeId: string;
  branchOfficeName: string;
};

class UpdateUserPuntuactions {
  public static exec = async (
    userId: string,
    newPuntuaction: UserPuntuaction
  ) => {
    const db = firebase.firestore();
    const docRef = db.collection(FirebaseCollectionNames.client).doc(userId);

    try {
      const userPuntuactions = await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(docRef);
        const client = doc.data();

        let puntuaction: ClientPuntuactionData;

        const clientPuntuaction = client.puntuaction;
        const clientPuntuactionStore = [...clientPuntuaction.store];
        const clientBOIds = [...clientPuntuaction.branchOfficeIds];

        const existsPuntuaction = clientBOIds.includes(
          newPuntuaction.branchOfficeId
        );

        const createdAt = firebase.firestore.Timestamp.now();

        if (existsPuntuaction) {
          puntuaction = {
            branchOfficeIds: [...clientPuntuaction.branchOfficeIds],
            store: clientPuntuactionStore.map((v) => {
              if (v.branchOfficeId === newPuntuaction.branchOfficeId) {
                return {
                  ...newPuntuaction,
                  createdAt,
                };
              }

              return v;
            }),
          };
        } else {
          puntuaction = {
            branchOfficeIds: [...clientBOIds, newPuntuaction.branchOfficeId],
            store: [
              ...clientPuntuactionStore,
              {
                ...newPuntuaction,
                createdAt,
              },
            ],
          };
        }

        transaction.update(docRef, { puntuaction });

        return puntuaction;
      });

      return userPuntuactions;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default UpdateUserPuntuactions;
