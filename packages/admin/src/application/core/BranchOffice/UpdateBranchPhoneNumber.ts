import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

type UpdateBranchPhoneNumberParams = {
  id: string;
  phoneNumber: string;
};

class UpdateBranchPhoneNumber {
  public async __invoke(params: UpdateBranchPhoneNumberParams) {
    const firestore = firebase.firestore();
    const branchOfficeRef = firestore
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(params.id);

    try {
      await branchOfficeRef.update({
        phoneNumber: params.phoneNumber,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateBranchPhoneNumber;
