import firebase from "firebase";

import { Types } from "@food/shared";
import { FirebaseCollectionNames } from "config/constans";

class GetUserById {
  public async __invoke(userId: string) {
    const firestore = firebase.firestore();
    const users = firestore.collection(FirebaseCollectionNames.client);
    const request = await users.doc(userId).get();

    if (!request.exists) return null;

    const data = request.data();
    const userData: Types.Client = {
      _id: userId,
      email: data.email,
      fullName: data.fullName,
      createdAt: data.createdAt,
      description: data.description,
      puntuaction: data.puntuaction,
      profileImage: data.profileImage,
      authenticationType: data.authenticationType,
    };

    return userData;
  }
}

export default GetUserById;
