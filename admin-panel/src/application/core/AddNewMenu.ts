import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import foodSellConverter from "application/firebase/FoodSell/converter";
import branchOfficeConverter from "application/firebase/BranchOffice/converter";
import foodConverter from "application/firebase/Food/converter";

import type {
  MenuFoodType,
  MenuType,
} from "application/types/BranchOfficeModelType";

type MenuProps = {
  name: string;
  description: string;
  foodsId: string[];
};

class AddNewMenu {
  public static exec = async (branchId: string, foodSell: MenuProps) => {
    const db = firebase.firestore();
    const branchRef = db
      .collection(FirebaseCollectionNames.branchOffice)
      .withConverter(branchOfficeConverter)
      .doc(branchId);

    const foodSellRef = db
      .collection(FirebaseCollectionNames.sellFood)
      .withConverter(foodSellConverter);

    try {
      const data = await db.runTransaction(async (transaction) => {
        const branchOffice = await transaction.get(branchRef);
        const branchData = branchOffice.data();

        const newSellFood = await foodSellRef.add({
          name: foodSell.name,
          description: foodSell.description,
          foodIds: foodSell.foodsId,
          createdAt: firebase.firestore.Timestamp.now(),
          branchOffice: {
            _id: branchId,
            name: branchData.name,
          },
        });

        const getFoodsById = async () => {
          const promiseFoods = [];

          foodSell.foodsId.forEach((v) => {
            const foodRef = db
              .collection(FirebaseCollectionNames.food)
              .withConverter(foodConverter)
              .doc(v);

            promiseFoods.push(foodRef.get());
          });

          const allData = await Promise.all(promiseFoods);

          const foods: MenuFoodType[] = allData.map((doc) => {
            const foodData = doc.data();

            return {
              _id: doc.id,
              image: foodData.image.url,
              name: foodData.name,
              price: foodData.price,
            };
          });

          return foods;
        };

        const newBranchMenu: MenuType[] = [
          ...branchData.menu,
          {
            _id: newSellFood.id,
            title: foodSell.name,
            description: foodSell.description,
            foods: await getFoodsById(),
          },
        ];

        await transaction.update(branchRef, { menu: newBranchMenu });

        return newBranchMenu;
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default AddNewMenu;
