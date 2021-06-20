import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import SellFoodDelete from "../SellFoodDelete";
import { branchOfficeConverter } from "@food-proyect/shared-firebase-converter";

class RemoveMenuInBranch {
  public static async exec(branchId: string, deleteMenusId: string[]) {
    const db = firebase.firestore();
    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .withConverter(branchOfficeConverter)
      .doc(branchId);

    try {
      await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(branchRef);
        const branchData = branchOffice.data();

        const menu = [...branchData.menu].filter(
          (v) => !deleteMenusId.includes(v._id)
        );

        await Promise.all(deleteMenusId.map((_id) => SellFoodDelete.exec(_id)));

        transaction.update(branchRef, { menu });
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default RemoveMenuInBranch;
