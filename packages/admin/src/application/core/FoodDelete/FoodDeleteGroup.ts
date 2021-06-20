import { FOOD_IMAGE_REPOSITORY } from "config/constants";

import DeleteImage from "../DeleteImage";
import FoodDeleteById from "./FoodDeleteById";
import FoodDeleteInBranchMenu from "./FoodDeleteInBranchMenu";

type FoodDeletable = {
  id: string;
  image_name: string;
};

class FoodDeleteGroup {
  private deleteImage: DeleteImage;
  private foodDeleteById: FoodDeleteById;
  private foodDeleteInBranch: FoodDeleteInBranchMenu;

  constructor(
    foodDeleteById: FoodDeleteById,
    deleteImage: DeleteImage,
    foodDeleteInBranch: FoodDeleteInBranchMenu
  ) {
    this.deleteImage = deleteImage;
    this.foodDeleteById = foodDeleteById;
    this.foodDeleteInBranch = foodDeleteInBranch;
  }

  public async exec(foods: FoodDeletable[]) {
    try {
      const promiseDeleteIds = foods.map(async (v) => {
        const isDelete = await this.foodDeleteInBranch.exec(v.id);

        if (!isDelete) return;

        if (v.image_name) {
          const image_path = `${FOOD_IMAGE_REPOSITORY}/${v.image_name}`;
          await this.deleteImage.exec(image_path);
        }

        await this.foodDeleteById.exec(v.id);
      });

      await Promise.all(promiseDeleteIds);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default FoodDeleteGroup;
