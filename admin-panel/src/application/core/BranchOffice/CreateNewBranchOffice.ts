import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

import type { FoodType } from "application/types/FoodType";

import UploadBranchImage from "./UploadBranchImage";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

type TData = {
  image: File;
  updatePercentaje(percentaje: number): void;
  params: {
    email: string;
    name: string;
    foodType: FoodType;
    description: string;
    phoneNumber: string;
    location: {
      address: string;
      latitude: number;
      longitude: number;
    };
  };
};

class CreateNewBranchOffice {
  private uploadBranchImage: UploadBranchImage;

  constructor(uploadImage: UploadBranchImage) {
    this.uploadBranchImage = uploadImage;
  }

  public __invoke = async ({
    image,
    params,
    updatePercentaje,
  }: TData): Promise<BranchOfficeModelType> => {
    const firestore = firebase.firestore();
    const foodCollection = firestore.collection(
      FirebaseCollectionNames.branchOffice
    );

    try {
      const createdAt = firebase.firestore.Timestamp.now();
      const imageUpload = await this.uploadBranchImage.__invoke({
        image,
        updatePercentaje,
      });

      if (!imageUpload) {
        return null;
      }

      const newBranchOffice = await foodCollection.add({
        name: params.name,
        stars: 0,
        menu: [],
        foodType: params.foodType,
        description: params.description,
        phoneNumber: params.phoneNumber,
        permisions: [],
        userPuntuactionsId: [],
        bannerImage: imageUpload,
        location: params.location,
        puntuactions: [],
        createdAt: createdAt,
      });

      return {
        _id: newBranchOffice.id,
        name: params.name,
        menu: [],
        foodType: params.foodType,
        description: params.description,
        email: params.email,
        phoneNumber: params.phoneNumber,
        permisions: [],
        userPuntuactionsId: [],
        bannerImage: imageUpload,
        location: params.location,
        puntuactions: [],
        createdAt: createdAt,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreateNewBranchOffice;
