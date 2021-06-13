import firebase from "firebase";

import FoodSellModel from "./model";

const foodSellConverter = {
  toFirestore(food: FoodSellModel): firebase.firestore.DocumentData {
    return { ...food };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): FoodSellModel {
    const data = snapshot.data(options);
    return new FoodSellModel(data.name, data.price, data.image, data.createdAt);
  },
};

export default foodSellConverter;
