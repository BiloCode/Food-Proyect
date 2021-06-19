import { FoodModelType } from "application/types/FoodModelType";

class FoodPriceSum {
  static exec = (foods: FoodModelType[]) => {
    return foods.reduce((prev, next) => prev + next.price, 0).toFixed(2);
  };
}

export default FoodPriceSum;
