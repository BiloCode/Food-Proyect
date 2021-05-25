import { PuntuactionType } from "application/types/BranchOfficeModelType";
import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

type UpdatedData = {
  _id: string;
  fullName: string;
  profileImageUrl: string;
};

class UpdateUserDataInPuntuactions {
  public static exec = async (userData: UpdatedData) => {
    const db = firebase.firestore();
    const clientDocRef = db
      .collection(FirebaseCollectionNames.client)
      .doc(userData._id);

    try {
      db.runTransaction(async (transaction) => {
        const client = await transaction.get(clientDocRef);
        const clientData = client.data();

        const clientBranchOfficeIds = [
          ...clientData.puntuaction.branchOfficeIds,
        ];

        const requestPuntuactions = [];

        clientBranchOfficeIds.forEach((_id) => {
          const branchDocRef = db
            .collection(FirebaseCollectionNames.branchOffice)
            .doc(_id);

          const updatedData = () => {
            return transaction.get(branchDocRef).then((doc) => {
              const branchData = doc.data();
              const store: PuntuactionType[] = [...branchData.puntuactions];

              const puntuactions = store.map((puntuactionData) => {
                if (puntuactionData.userId === userData._id) {
                  return {
                    ...puntuactionData,
                    client: {
                      fullName: userData.fullName,
                      profileImage: userData.profileImageUrl,
                    },
                  };
                }

                return puntuactionData;
              });

              transaction.update(branchDocRef, { puntuactions });

              return true;
            });
          };

          requestPuntuactions.push(updatedData());
        });

        await Promise.all(requestPuntuactions);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default UpdateUserDataInPuntuactions;
