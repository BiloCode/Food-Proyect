import firebase from "firebase";

import { clientProfileImageRepository } from "config/constans";

class DeleteImage {
  public async __invoke(imageName: string) {
    const storage = firebase.storage();
    const storeRef = storage.ref(clientProfileImageRepository + imageName);

    await storeRef.delete().catch(console.log);
  }
}

export default DeleteImage;
