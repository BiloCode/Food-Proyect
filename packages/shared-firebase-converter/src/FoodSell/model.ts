import firebase from "firebase";

class FoodSellModel {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly foodIds: string[],
    readonly createdAt: firebase.firestore.Timestamp,
    readonly branchOffice: { _id: string; name: string }
  ) {}
}

export default FoodSellModel;
