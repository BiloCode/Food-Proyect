import firebase from "firebase";

import FirebaseImageType from "./FirebaseImageType";

type FoodModelType = {
  _id: string;
  name: string;
  price: number;
  image: FirebaseImageType;
  branchIds: string[];
  createdAt: firebase.firestore.Timestamp;
};

export default FoodModelType;
