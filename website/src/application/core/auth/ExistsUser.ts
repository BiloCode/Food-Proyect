import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";

class ExistsUser {
  public static exec = async (id: string) => {
    const firestore = firebase.firestore();
    const users = firestore.collection(FirebaseCollectionNames.client);

    try {
      const user = await users.doc(id).get();
      if (user.exists) {
        return true;
      }

      return false;
    } catch (error) {
      return new Error(error);
    }
  };
}

export default ExistsUser;
