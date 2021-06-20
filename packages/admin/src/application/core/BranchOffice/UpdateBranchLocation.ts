import firebase from "firebase";

import { FirebaseCollectionNames } from "config/constants";

type UpdateBranchLocationParams = {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
};

class UpdateBranchLocation {
  public async __invoke(params: UpdateBranchLocationParams) {
    const firestore = firebase.firestore();
    const branchOfficeRef = firestore
      .collection(FirebaseCollectionNames.branchOffice)
      .doc(params.id);

    try {
      await branchOfficeRef.update({
        location: {
          address: params.address,
          latitude: params.latitude,
          longitude: params.longitude,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateBranchLocation;
