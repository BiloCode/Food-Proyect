import firebase from "firebase";

import type { FoodSellModelType } from "application/types/FoodSellModelType";

class FoodSellModel {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly foods: FoodSellModelType[],
    readonly createdAt: firebase.firestore.Timestamp
  ) {}
}

export default FoodSellModel;
