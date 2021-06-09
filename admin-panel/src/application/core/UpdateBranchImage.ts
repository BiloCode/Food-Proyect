import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";
import { FirebaseImageType } from "application/types/FirebaseImageType";

type UpdateBranchImageParams = {
  id: string;
  image: FirebaseImageType;
};

class UpdateBranchImage {
  public async __invoke(params: UpdateBranchImageParams) {
    const firestore = firebase.firestore();
    const branchOfficeRef = firestore
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(params.id);

    try {
      await branchOfficeRef.update({
        bannerImage: params.image,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateBranchImage;
