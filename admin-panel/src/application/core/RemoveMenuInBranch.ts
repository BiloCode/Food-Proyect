import firebase from "firebase";

import branchOfficeConverter from "application/firebase/BranchOffice/converter";

import { FirebaseCollectionNames } from "config/constants";
import foodSellConverter from "application/firebase/FoodSell/converter";

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

        const removeInDocument = async () => {
          const promises = deleteMenusId.map(async (v) => {
            const foodSellRef = db
              .collection(FirebaseCollectionNames.sellFood)
              .withConverter(foodSellConverter)
              .doc(v);

            return foodSellRef.delete();
          });

          await Promise.all(promises);
        };

        await removeInDocument();

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
