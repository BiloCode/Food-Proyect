import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import type { MenuType } from "application/types/BranchOfficeModelType";

import foodSellConverter from "application/firebase/FoodSell/converter";

import UpdateBranchIdsInFoods from "./UpdateBranchIdsInFood";
import branchOfficeConverter from "application/firebase/BranchOffice/converter";

type MenuProps = {
  name: string;
  foodsId: string[];
  description: string;
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

        const NewSellFood = await foodSellRef.add({
          name: foodSell.name,
          description: foodSell.description,
          foodIds: foodSell.foodsId,
          createdAt: firebase.firestore.Timestamp.now(),
          branchOffice: {
            _id: branchId,
            name: branchData.name,
          },
        });

        const foods = await UpdateBranchIdsInFoods.exec(foodSell.foodsId);
        const newBranchMenu: MenuType[] = [
          ...branchData.menu,
          {
            foods,
            _id: NewSellFood.id,
            title: foodSell.name,
            description: foodSell.description,
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
