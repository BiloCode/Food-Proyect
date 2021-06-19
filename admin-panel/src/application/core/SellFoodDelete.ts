import foodSellConverter from "application/firebase/FoodSell/converter";
import { FirebaseCollectionNames } from "config/constants";
import firebase from "firebase";

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
