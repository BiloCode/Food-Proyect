import firebase from "firebase";

export type NewPuntuactionType = {
  userId: string;
  stars: number;
  description: string;
  createdAt: firebase.firestore.Timestamp;
  client: {
    profileImage: string;
    fullName: string;
  };
};
