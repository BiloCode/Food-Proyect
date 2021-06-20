import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

type UpdateBranchEmailParams = {
  id: string;
  email: string;
};

class UpdateBranchEmail {
  public async __invoke(params: UpdateBranchEmailParams) {
    const firestore = firebase.firestore();
    const branchOfficeRef = firestore
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(params.id);

    try {
      await branchOfficeRef.update({
        email: params.email,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateBranchEmail;
