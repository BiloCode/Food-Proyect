import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";
import { AuthenticationType } from "application/types/AuthtenticationType";
import { FirebaseImageType } from "application/types/FirebaseImageType";
import { ClientPuntuactionData } from "application/types/ClientModelType";

type CreateUserParams = {
  _id: string;
  type: AuthenticationType;
  data: {
    email: string;
    fullName: string;
    profileImage: FirebaseImageType;
  };
};

class CreateNewUser {
  public async __invoke(params: CreateUserParams) {
    const firestore = firebase.firestore();

    try {
      const puntuaction: ClientPuntuactionData = {
        branchOfficeIds: [],
        store: [],
      };

      await firestore
        .collection(FirebaseCollectionNames.client)
        .doc(params._id)
        .set({
          ...params.data,
          puntuaction,
          description: "",
          authenticationType: params.type,
          createdAt: firebase.firestore.Timestamp.now(),
        });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default CreateNewUser;
