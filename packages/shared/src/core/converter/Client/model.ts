import firebase from "firebase";

import {
  FirebaseImageType,
  ClientPuntuactionData,
  AuthenticationType,
} from "../../types";

class ClientModel {
  constructor(
    readonly fullName: string,
    readonly email: string,
    readonly description: string,
    readonly authenticationType: AuthenticationType,
    readonly profileImage: FirebaseImageType,
    readonly createdAt: firebase.firestore.Timestamp,
    readonly puntuaction: ClientPuntuactionData
  ) {}
}

export default ClientModel;
