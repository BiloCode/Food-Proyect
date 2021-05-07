import firebase from "firebase";

import { StarsType } from "./StarsType";
import { FoodType } from "application/types/FoodType";
import { FirebaseImageType } from "application/types/FirebaseImageType";

type LocationType = {
  latitude: number;
  longitude: number;
  address: string;
};

export type PuntuactionType = {
  _id: string;
  stars: StarsType;
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
  description: string;
  phoneNumber: string;
  bannerImage: FirebaseImageType;
  foodType: FoodType;
  location: LocationType;
  puntuactions: PuntuactionType[];
  permisions: [];
};
