import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constans";

class ExistsUser {
  public async __invoke(id: string) {
    const firestore = firebase.firestore();
    const users = firestore.collection(FirebaseCollectionNames.client);

    try {
      const request = await users.doc(id).get();
      if (request.data()) {
        return true;
      }

      return false;
    } catch (error) {
      return new Error(error);
    }
  }
}

export default ExistsUser;
