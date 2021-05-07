import firebase from "firebase";

import { FoodType } from "application/types/FoodType";
import { FirebaseImageType } from "application/types/FirebaseImageType";

type LocationType = {
  latitude: number;
  longitude: number;
  address: string;
};

type ReactionType = {
  _id: string;
  stars: number;
  description: string;
  createdAt: firebase.firestore.Timestamp;
  client: {
    profileImage: string;
    fullName: string;
  };
};

export type BranchOfficeModelType = {
  _id: string;
  menu: [];
  name: string;
  phoneNumber: string;
  bannerImage: FirebaseImageType;
  foodTypeSell: FoodType;
  location: LocationType;
  reactions: ReactionType;
  permisions: [];
};
