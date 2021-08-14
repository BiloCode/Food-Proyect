import firebase from "firebase";

import FirebaseImageType from "./FirebaseImageType";
import AuthenticationType from "./AuthenticationType";

export type ClientClientPuntuactions = {
  stars: number;
  description?: string;
  branchOfficeId: string;
  branchOfficeName: string;
  createdAt: firebase.firestore.Timestamp;
};

export type ClientPuntuactionData = {
  branchOfficeIds: string[];
  store: ClientClientPuntuactions[];
};

type Client = {
  _id: string;
  email: string;
  fullName: string;
  description: string;
  profileImage: FirebaseImageType;
  authenticationType: AuthenticationType;
  createdAt: firebase.firestore.Timestamp;
  puntuaction: ClientPuntuactionData;
};

export default Client;
