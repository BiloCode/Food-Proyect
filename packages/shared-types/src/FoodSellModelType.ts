import firebase from "firebase";

type FoodSellModelType = {
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

export default FoodSellModelType;
