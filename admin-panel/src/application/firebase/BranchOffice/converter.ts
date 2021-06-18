import firebase from "firebase";

import BranchOfficeModel from "./model";

const branchOfficeConverter = {
  toFirestore(
    branchOffice: BranchOfficeModel
  ): firebase.firestore.DocumentData {
    return { ...branchOffice };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): BranchOfficeModel {
    const data = snapshot.data(options);
    return new BranchOfficeModel(
      data.bannerImage,
      data.foodType,
      data.description,
      data.location,
      data.menu,
      data.name,
      data.permisions,
      data.phoneNumber,
      data.puntuactions,
      data.userPuntuactionsId,
      data.createdAt
    );
  },
};

export default branchOfficeConverter;
