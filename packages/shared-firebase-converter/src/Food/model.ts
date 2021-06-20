import firebase from "firebase";

import type { FirebaseImageType } from "@food-proyect/shared-types";

class FoodModel {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly branchIds: string[],
    readonly image: FirebaseImageType,
    readonly createdAt: firebase.firestore.Timestamp
  ) {}
}

export default FoodModel;
