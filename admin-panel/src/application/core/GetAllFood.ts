import firebase from "firebase";

import foodConverter from "application/firebase/Food/converter";

import { FirebaseCollectionNames } from "config/constants";
import { FoodModelType } from "application/types/FoodModelType";

export default class GetAllFood {
  public static exec = async (): Promise<FoodModelType[]> => {
    const db = firebase.firestore();
    const reference = db
      .collection(FirebaseCollectionNames.food)
      .withConverter(foodConverter);

    const store: FoodModelType[] = [];

    try {
      const requestData = await reference.get();
      requestData.forEach((v) => {
        if (!v.exists) return;

        const data = v.data();
        store.push({
          _id: v.id,
          name: data.name,
          price: data.price,
          image: data.image,
          branchIds: data.branchIds,
          createdAt: data.createdAt,
        });
      });

      return store;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
