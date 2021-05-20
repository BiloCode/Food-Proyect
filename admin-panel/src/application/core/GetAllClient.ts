import firebase from "firebase";

import clientConverter from "application/firebase/Client/converter";

import { FirebaseCollectionNames } from "config/constants";
import type { ClientModelType } from "application/types/ClientModelType";

export default class GetAllClient {
  public static exec = async (): Promise<ClientModelType[]> => {
    const db = firebase.firestore();
    const reference = db
      .collection(FirebaseCollectionNames.client)
      .withConverter(clientConverter);

    const store: ClientModelType[] = [];

    try {
      const requestData = await reference.get();
      requestData.forEach((v) => {
        if (!v.exists) return;

        const data = v.data();
        store.push({
          _id: v.id,
          authenticationType: data.authenticationType,
          createdAt: data.createdAt,
          description: data.description,
          email: data.email,
          fullName: data.fullName,
          profileImage: data.profileImage,
          puntuaction: data.puntuaction,
        });
      });

      return store;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
