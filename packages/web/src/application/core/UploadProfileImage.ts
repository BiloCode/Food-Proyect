import firebase from "firebase";

import { Types } from "@food/shared";
import { PROFILE_IMAGE_REPOSITORY } from "config/constans";

type UploadTask = firebase.storage.UploadTask;

class UploadProfileImage {
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

  public async __invoke(userId: string, image: File) {
    const fileStorageRef = `${PROFILE_IMAGE_REPOSITORY}/${userId}_${image.name}`;

    const storage = firebase.storage();
    const storeRef = storage.ref(fileStorageRef);
    const upload = storeRef.put(image);

    try {
      await this.UploadState(upload);

      const imageURL = await upload.snapshot.ref.getDownloadURL();
      const reference = upload.snapshot.ref.storage.refFromURL(imageURL);
      const imageData: Types.FirebaseImageType = {
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

export default UploadProfileImage;
