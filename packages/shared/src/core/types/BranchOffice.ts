import firebase from "firebase";

import FoodType from "./FoodType";
import FirebaseImageType from "./FirebaseImageType";
import FirebaseLocationType from "./FirebaseLocationType";

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

type BranchOffice = {
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

export default BranchOffice;
