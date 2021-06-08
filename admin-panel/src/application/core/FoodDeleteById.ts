import firebase from "firebase";

class FoodDeleteById {
  public exec = async (_id: string) => {
    const firestore = firebase.firestore();
    const document = firestore.doc(_id);

    try {
      await document.delete();

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default FoodDeleteById;
