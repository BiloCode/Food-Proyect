import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import UploadFoodImage from "application/core/UploadFoodImage";

import { FoodModelType } from "@food-proyect/shared-types";

type Food = {
  image: File;
  name: string;
  price: number;
};

class CreateNewFood {
  private uploadFoodImage: UploadFoodImage;

  constructor(uploadImage: UploadFoodImage) {
    this.uploadFoodImage = uploadImage;
  }

  public __invoke = async ({
    image,
    name,
    price,
  }: Food): Promise<FoodModelType> => {
    const firestore = firebase.firestore();
    const foodCollection = firestore.collection(FirebaseCollectionNames.food);

    try {
      const createdAt = firebase.firestore.Timestamp.now();
      const imageUpload = await this.uploadFoodImage.__invoke(createdAt, image);
      if (!imageUpload) {
        return null;
      }

      const branchIds = [];
      const newFood = await foodCollection.add({
        name,
        price,
        branchIds,
        createdAt,
        image: imageUpload,
      });

      return {
        _id: newFood.id,
        name,
        price,
        branchIds,
        image: imageUpload,
        createdAt,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreateNewFood;
