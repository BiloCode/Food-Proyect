import firebase from "firebase";

class DeleteImage {
  public async exec(image_path: string) {
    const storage = firebase.storage();
    const storeRef = storage.ref(image_path);

    try {
      await storeRef.delete();
    } catch (error) {
      console.log(error);
    }
  }
}

export default DeleteImage;
