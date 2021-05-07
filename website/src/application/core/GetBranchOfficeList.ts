import { FirebaseCollectionNames } from "config/constans";
import firebase from "firebase";

class GetBranchOfficeList {
  public static exec = async () => {
    const list = [];
    const firestore = firebase.firestore();
    const collectionRef = firestore.collection(
      FirebaseCollectionNames.branchOffice
    );

    try {
      const branchOffices = await collectionRef.get();

      branchOffices.forEach((v) => {
        list.push({
          _id: v.id,
          ...v.data(),
        });
      });

      return list;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default GetBranchOfficeList;
