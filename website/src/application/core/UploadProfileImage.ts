import firebase from "firebase";

import { clientProfileImageRepository } from "config/constans";
import { FirebaseImageType } from "application/types/FirebaseImageType";

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

  public async __invoke(image: File): Promise<FirebaseImageType> {
    const storage = firebase.storage();
    const storeRef = storage.ref(clientProfileImageRepository + image.name);
    const upload = storeRef.put(image);

    try {
      await this.UploadState(upload);

      const imageURL = await upload.snapshot.ref.getDownloadURL();
      const reference = upload.snapshot.ref.storage.refFromURL(imageURL);

      return {
        url: imageURL,
        name: reference.name,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default UploadProfileImage;
