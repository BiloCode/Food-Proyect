import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";
import branchOfficeConverter from "application/firebase/BranchOffice/converter";

import type { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

class GetAllBranchOffice {
  public static exec = async (): Promise<BranchOfficeModelType[]> => {
    const db = firebase.firestore();
    const reference = db
      .collection(FirebaseCollectionNames.branchOffice)
      .withConverter(branchOfficeConverter);

    const store: BranchOfficeModelType[] = [];

    try {
      const firestoreData = await reference.get();

      firestoreData.forEach((v) => {
        const data = v.data();

        store.push({
          _id: v.id,
          menu: data.menu,
          name: data.name,
          location: data.location,
          foodType: data.foodType,
          permisions: data.permisions,
          phoneNumber: data.phoneNumber,
          description: data.description,
          email: data.email,
          bannerImage: data.bannerImage,
          puntuactions: data.puntuactions,
          userPuntuactionsId: data.userPuntuactionsId,
          createdAt: data.createdAt,
        });
      });

      return store;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}

export default GetAllBranchOffice;
