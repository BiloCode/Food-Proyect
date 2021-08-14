import { Food } from "../types";

function getTotalPriceFoods(foods: Food[]) {
  return foods.reduce((prev, next) => prev + next.price, 0).toFixed(2);
}

export default getTotalPriceFoods;
