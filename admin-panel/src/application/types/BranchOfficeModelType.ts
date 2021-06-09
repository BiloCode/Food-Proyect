import firebase from "firebase";

import type { FoodType } from "application/types/FoodType";
import type { FirebaseImageType } from "application/types/FirebaseImageType";
import type { FirebaseLocationType } from "application/types/FirebaseLocationType";

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
  menu: any[];
  name: string;
  stars: number;
  description: string;
  phoneNumber: string;
  bannerImage: FirebaseImageType;
  foodType: FoodType;
  location: FirebaseLocationType;
  userPuntuactionsId: string[];
  puntuactions: PuntuactionType[];
  permisions: any[];
  createdAt: firebase.firestore.Timestamp;
};
