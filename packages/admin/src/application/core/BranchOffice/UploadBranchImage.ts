import firebase from "firebase";

import { BRANCH_OFFICES_IMAGE_REPOSITORY } from "config/constants";
import { FirebaseImageType } from "@food/shared-types";

type UploadTask = firebase.storage.UploadTask;

type UploadBranchImageParams = {
  image: File;
  updatePercentaje(percentaje: number): void;
};

type UploadStateParams = {
  reference: UploadTask;
  updatePercentaje(percentaje: number): void;
};

class UploadBranchImage {
  private UploadState({ reference, updatePercentaje }: UploadStateParams) {
    return new Promise<void>((resolve, reject) => {
      reference.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          updatePercentaje(percentage);
        },
        (error) => reject(error),
        () => resolve()
      );
    });
  }

  public async __invoke({ image, updatePercentaje }: UploadBranchImageParams) {
    const fileStorageRef = `${BRANCH_OFFICES_IMAGE_REPOSITORY}/${
      firebase.firestore.Timestamp.now() + "_" + image.name
    }`;

    const storage = firebase.storage();
    const storeRef = storage.ref(fileStorageRef);
    const upload = storeRef.put(image);

    try {
      await this.UploadState({ reference: upload, updatePercentaje });

      const imageURL = await upload.snapshot.ref.getDownloadURL();
      const reference = upload.snapshot.ref.storage.refFromURL(imageURL);
      const imageData: FirebaseImageType = {
        url: imageURL,
        name: reference.name,
      };

      return imageData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default UploadBranchImage;
