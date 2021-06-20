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

export type MenuFoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export type MenuType = {
  _id: string;
  title: string;
  description: string;
  foods: MenuFoodType[];
};

export type PermisionsType = {
  _id: string;
  name: string;
};

export type BranchOfficeModelType = {
  _id: string;
  name: string;
  menu: MenuType[];
  foodType: FoodType;
  description: string;
  email: string;
  phoneNumber: string;
  permisions: PermisionsType[];
  userPuntuactionsId: string[];
  bannerImage: FirebaseImageType;
  location: FirebaseLocationType;
  puntuactions: PuntuactionType[];
  createdAt: firebase.firestore.Timestamp;
};
