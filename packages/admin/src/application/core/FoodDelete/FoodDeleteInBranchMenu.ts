import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";
import {
  branchOfficeConverter,
  foodConverter,
} from "@food/shared-firebase-converter";

class FoodDeleteInBranchMenu {
  public exec = async (foodId: string) => {
    const db = firebase.firestore();
    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .withConverter(branchOfficeConverter);

    const foodRef = db
      .collection(FirebaseCollectionNames.food)
      .withConverter(foodConverter)
      .doc(foodId);

    try {
      const isDelete = await db.runTransaction(async (transaction) => {
        const foodData = (await transaction.get(foodRef)).data();

        console.log(foodData);

        await Promise.all(
          [...foodData.branchIds].map(async (_id) => {
            const branchDocRef = branchRef.doc(_id);
            const branchRequest = await transaction.get(branchDocRef);

            if (!branchRequest.exists) return;

            const branchData = branchRequest.data();
            const menu = [...branchData.menu].filter((menu) => {
              const isFoodExists = menu.foods.some((v) => v._id === foodId);
              return !isFoodExists;
            });

            console.log(menu);

            await transaction.update(branchDocRef, { menu });
          })
        );

        return true;
      });

      return isDelete;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default FoodDeleteInBranchMenu;
