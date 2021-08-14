import firebase from "firebase";

import { FirebaseImageType } from "../../types";

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
