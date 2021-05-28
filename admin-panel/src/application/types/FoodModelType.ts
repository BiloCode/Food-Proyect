import firebase from "firebase";

import { FirebaseImageType } from "./FirebaseImageType";

export type FoodModelType = {
  _id: string;
  name: string;
  price: number;
  createdAt: firebase.firestore.Timestamp;
  image: FirebaseImageType;
};
