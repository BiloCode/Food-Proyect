import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import { branchOfficeConverter } from "@food/shared-firebase-converter";

class FoodDeleteInMenu {
  public async exec(branchId: string, foodId: string) {
    const db = firebase.firestore();

    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .withConverter(branchOfficeConverter)
      .doc(branchId);

    try {
      await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(branchRef);

        const branchData = branchOffice.data();
        const menu = [...branchData.menu].filter((v) => v._id !== foodId);

        await transaction.update(branchRef, { menu });
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default FoodDeleteInMenu;
