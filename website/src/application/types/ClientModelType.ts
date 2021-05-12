import firebase from "firebase";

import { FirebaseImageType } from "./FirebaseImageType";
import { AuthenticationType } from "./AuthtenticationType";

export type ClientPuntuactionsType = {
  stars: number;
  description?: string;
  branchOfficeId: string;
  branchOfficeName: string;
  createdAt: firebase.firestore.Timestamp;
};

export type ClientModelType = {
  _id: string;
  email: string;
  fullName: string;
  description: string;
  profileImage: FirebaseImageType;
  authenticationType: AuthenticationType;
  createdAt: firebase.firestore.Timestamp;
  puntuactions: ClientPuntuactionsType[];
};
