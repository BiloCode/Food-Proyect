import firebase from "firebase";

import { ClientModelType } from "application/types/ClientModelType";
import { FirebaseCollectionNames } from "config/constans";

class GetUserById {
  public async __invoke(userId: string) {
    const firestore = firebase.firestore();
    const users = firestore.collection(FirebaseCollectionNames.client);
    const request = await users.doc(userId).get();

    if (!request.exists) return null;

    const data = request.data();
    const userData: ClientModelType = {
      _id: userId,
      email: data.email,
      fullName: data.fullName,
      createdAt: data.createdAt,
      description: data.description,
      puntuactions: data.puntuactions,
      profileImage: data.profileImage,
      authenticationType: data.authenticationType,
    };

    return userData;
  }
}

export default GetUserById;
