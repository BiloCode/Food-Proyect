import firebase from "firebase";

import UploadBranchImage from "application/core/UploadBranchImage";
import { FirebaseCollectionNames } from "config/constants";
import { FoodModelType } from "application/types/FoodModelType";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { FoodType } from "application/types/FoodType";

type CreateNewBranchOfficeParams = {
  image: File;
  UpdatePercentaje(percentaje: number): void;
  params: {
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

  public __invoke = async (
    props: CreateNewBranchOfficeParams
  ): Promise<BranchOfficeModelType> => {
    const firestore = firebase.firestore();
    const foodCollection = firestore.collection(
      FirebaseCollectionNames.branchOffice
    );

    try {
      const createdAt = firebase.firestore.Timestamp.now();
      const imageUpload = await this.uploadBranchImage.__invoke({
        image: props.image,
        UpdatePercentaje: props.UpdatePercentaje,
      });
      if (!imageUpload) {
        return null;
      }

      const newBranchOffice = await foodCollection.add({
        name: props.params.name,
        stars: 0,
        menu: [],
        foodType: props.params.foodType,
        description: props.params.description,
        phoneNumber: props.params.phoneNumber,
        permisions: [],
        userPuntuactionsId: [],
        bannerImage: imageUpload,
        location: props.params.location,
        puntuactions: [],
        createdAt: createdAt,
      });

      return {
        _id: newBranchOffice.id,
        name: props.params.name,
        menu: [],
        foodType: props.params.foodType,
        description: props.params.description,
        phoneNumber: props.params.phoneNumber,
        permisions: [],
        userPuntuactionsId: [],
        bannerImage: imageUpload,
        location: props.params.location,
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
