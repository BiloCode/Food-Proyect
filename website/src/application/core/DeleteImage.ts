import firebase from "firebase";

import { PROFILE_IMAGE_REPOSITORY } from "config/constans";

class DeleteImage {
  public async __invoke(imageName: string) {
    const oldImageURL = PROFILE_IMAGE_REPOSITORY + "/" + imageName;

    const storage = firebase.storage();
    const storeRef = storage.ref(oldImageURL);

    await storeRef.delete().catch(console.log);
  }
}

export default DeleteImage;
