import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";
import { FirebaseImageType } from "application/types/FirebaseImageType";

class UpdateUserProfileImage {
  public async __invoke(_id: string, profileImage: FirebaseImageType) {
    const firestore = firebase.firestore();
    const user = firestore.collection(FirebaseCollectionNames.client).doc(_id);

    try {
      await user.update({ profileImage });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateUserProfileImage;
