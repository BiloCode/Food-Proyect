import firebase from "firebase";

import ClientModel from "./model";

const clientConverter = {
  toFirestore(client: ClientModel): firebase.firestore.DocumentData {
    return { ...client };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): ClientModel {
    const data = snapshot.data(options);
    return new ClientModel(
      data.fullName,
      data.email,
      data.description,
      data.authenticationType,
      data.profileImage,
      data.createdAt,
      data.puntuaction
    );
  },
};

export default clientConverter;
