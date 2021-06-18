import firebase from "firebase";

class DeleteImage {
  public async exec(image_path: string) {
    const storage = firebase.storage();
    const storeRef = storage.ref(image_path);

    try {
      await storeRef.delete();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default DeleteImage;
