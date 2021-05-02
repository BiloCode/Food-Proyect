import firebase from "firebase";

import { FirebaseImageType } from "application/types/FirebaseImageType";

interface GoogleSuccessAuthType {
  _id: string;
  email: string;
  fullName: string;
  profileImage: FirebaseImageType;
}

class CreateNewUserWithEmail {
  public __invoke = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = result.user;

      if (!user) {
        return null;
      }

      const userData: GoogleSuccessAuthType = {
        _id: user.uid,
        email: user.email!,
        fullName: username,
        profileImage: {
          name: "",
          url: user.photoURL!,
        },
      };

      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreateNewUserWithEmail;
