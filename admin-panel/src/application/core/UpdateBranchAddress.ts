import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

type UpdateBranchDescriptionParams = {
  id: string;
  address: string;
};

class UpdateBranchDescription {
  public async __invoke(params: UpdateBranchDescriptionParams) {
    const firestore = firebase.firestore();
    const branchOfficeRef = firestore
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(params.id);

    try {
      await branchOfficeRef.update({
        "location.address": params.address,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateBranchDescription;
