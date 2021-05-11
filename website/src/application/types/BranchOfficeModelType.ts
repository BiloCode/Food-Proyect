import firebase from "firebase";

import { FoodType } from "application/types/FoodType";
import { FirebaseImageType } from "application/types/FirebaseImageType";

type LocationType = {
  latitude: number;
  longitude: number;
  address: string;
};

export type PuntuactionType = {
  userId: string;
  edited: boolean;
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
  stars: number;
  description: string;
  phoneNumber: string;
  bannerImage: FirebaseImageType;
  foodType: FoodType;
  location: LocationType;
  puntuactions: PuntuactionType[];
  permisions: [];
};
