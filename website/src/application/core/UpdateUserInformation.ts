import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

type UserUpdatedProps = {
  _id: string;
  fullName: string;
  description: string;
};

class UpdateUserInformation {
  public __invoke = async (data: UserUpdatedProps) => {
    const firestore = firebase.firestore();
    const ref = firestore
      .collection(FirebaseCollectionNames.client)
      .doc(data._id);

    try {
      await ref.update({
        fullName: data.fullName,
        description: data.description,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default UpdateUserInformation;
