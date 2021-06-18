import firebase from "firebase";

import FoodModel from "./model";

const foodConverter = {
  toFirestore(food: FoodModel): firebase.firestore.DocumentData {
    return { ...food };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): FoodModel {
    const data = snapshot.data(options);
    return new FoodModel(
      data.name,
      data.price,
      data.branchIds,
      data.image,
      data.createdAt
    );
  },
};

export default foodConverter;
