import firebase from "firebase";

type FoodSell = {
  _id: string;
  name: string;
  description: string;
  foodIds: string[];
  createdAt: firebase.firestore.Timestamp;
  branchOffice: {
    _id: string;
    name: string;
  };
};

export default FoodSell;
