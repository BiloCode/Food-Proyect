import firebase from "firebase";

import {
  FoodType,
  FirebaseImageType,
  FirebaseLocationType,
  MenuType,
  PermisionsType,
  PuntuactionType,
} from "../../types";

class BranchOfficeModel {
  constructor(
    readonly bannerImage: FirebaseImageType,
    readonly foodType: FoodType,
    readonly description: string,
    readonly email: string,
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
