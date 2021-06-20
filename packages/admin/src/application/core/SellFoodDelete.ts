import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import { foodSellConverter } from "@food-proyect/shared-firebase-converter";

class SellFoodDelete {
  public static exec = async (sellFoodId: string) => {
    const db = firebase.firestore();
    const foodSellRef = db
      .collection(FirebaseCollectionNames.sellFood)
      .withConverter(foodSellConverter)
      .doc(sellFoodId);

    try {
      await foodSellRef.delete();

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default SellFoodDelete;
