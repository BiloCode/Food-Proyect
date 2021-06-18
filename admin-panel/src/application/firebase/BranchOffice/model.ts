import firebase from "firebase";

import type { FoodType } from "application/types/FoodType";
import type { FirebaseImageType } from "application/types/FirebaseImageType";
import type { FirebaseLocationType } from "application/types/FirebaseLocationType";
import type {
  MenuType,
  PermisionsType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

class BranchOfficeModel {
  constructor(
    readonly bannerImage: FirebaseImageType,
    readonly foodType: FoodType,
    readonly description: string,
    readonly location: FirebaseLocationType,
    readonly menu: MenuType[],
    readonly name: string,
    readonly permisions: PermisionsType[],
    readonly phoneNumber: string,
    readonly puntuactions: PuntuactionType[],
    readonly userPuntuactionsId: string[],
    readonly createdAt: firebase.firestore.Timestamp
  ) {}
}

export default BranchOfficeModel;
