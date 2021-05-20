import type { FoodType } from "application/types/FoodType";
import type { FirebaseImageType } from "application/types/FirebaseImageType";
import type { FirebaseLocationType } from "application/types/FirebaseLocationType";
import type { PuntuactionType } from "application/types/BranchOfficeModelType";

class BranchOfficeModel {
  constructor(
    readonly bannerImage: FirebaseImageType,
    readonly foodType: FoodType,
    readonly description: string,
    readonly location: FirebaseLocationType,
    readonly menu: any[],
    readonly name: string,
    readonly stars: number,
    readonly permisions: any[],
    readonly phoneNumber: string,
    readonly puntuactions: PuntuactionType[],
    readonly userPuntuactionsId: string[]
  ) {}
}

export default BranchOfficeModel;
