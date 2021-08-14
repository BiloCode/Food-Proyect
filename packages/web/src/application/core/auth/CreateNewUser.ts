import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";
import { Types } from "@food/shared";

type CreateUserParams = {
  _id: string;
  type: Types.AuthenticationType;
  data: {
    email: string;
    fullName: string;
    profileImage: Types.FirebaseImageType;
  };
};

class CreateNewUser {
  public static exec = async (params: CreateUserParams) => {
    const firestore = firebase.firestore();

    try {
      const puntuaction: Types.ClientPuntuactionData = {
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
  };
}

export default CreateNewUser;
