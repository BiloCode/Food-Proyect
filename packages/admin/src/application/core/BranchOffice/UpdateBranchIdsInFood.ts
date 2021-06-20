import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import NotRepeatId from "application/utils/NotRepeatId";
import { foodConverter } from "@food-proyect/shared-firebase-converter";

class UpdateBranchIdsInFoods {
  public static exec = async (foodsId: string[]) => {
    const db = firebase.firestore();
    const foodModelRef = db
      .collection(FirebaseCollectionNames.food)
      .withConverter(foodConverter);

    const promiseFoods = foodsId.map(async (_id) => {
      const docRef = foodModelRef.doc(_id);
      const food = await docRef.get();

      if (!food.exists) {
        return null;
      }

      const foodData = food.data();
      const foodBranchIds = NotRepeatId.exec([...foodData.branchIds, _id]);

      await docRef.update({ branchIds: foodBranchIds });

      return {
        _id: food.id,
        name: foodData.name,
        price: foodData.price,
        image: foodData.image.url,
      };
    });

    const resultData = await Promise.all(promiseFoods);

    return resultData.filter((v) => v !== null);
  };
}

export default UpdateBranchIdsInFoods;
