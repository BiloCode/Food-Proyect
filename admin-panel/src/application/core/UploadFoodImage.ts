import firebase from "firebase";

import { FOOD_IMAGE_REPOSITORY } from "config/constants";
import { FirebaseImageType } from "application/types/FirebaseImageType";

type UploadTask = firebase.storage.UploadTask;
type Timestamp = firebase.firestore.Timestamp;

class UploadFoodImage {
  private UploadState(reference: UploadTask) {
    return new Promise<void>((resolve, reject) => {
      reference.on(
        "state_changed",
        () => {},
        (error) => reject(error),
        () => resolve()
      );
    });
  }

  public async __invoke(createdAt: Timestamp, image: File) {
    const fileStorageRef = `${FOOD_IMAGE_REPOSITORY}/${createdAt.toMillis()}_${
      image.name
    }`;

    const storage = firebase.storage();
    const storeRef = storage.ref(fileStorageRef);
    const upload = storeRef.put(image);

    try {
      await this.UploadState(upload);

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

export default UploadFoodImage;
