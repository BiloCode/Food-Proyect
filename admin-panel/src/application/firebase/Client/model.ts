import firebase from "firebase";

import type { FirebaseImageType } from "application/types/FirebaseImageType";
import type { ClientPuntuactionData } from "application/types/ClientModelType";
import type { AuthenticationType } from "application/types/AuthenticationType";

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
