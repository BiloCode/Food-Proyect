import firebase from "firebase";

import { FirebaseImageType } from "application/types/FirebaseImageType";

interface GoogleSuccessAuthType {
  _id: string;
  email: string;
  fullName: string;
  profileImage: FirebaseImageType;
}

class GoogleAuthentication {
  public __invoke = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      if (!user) {
        return null;
      }

      if (!user.emailVerified) {
        return null;
      }

      const userData: GoogleSuccessAuthType = {
        _id: user.uid,
        email: user.email!,
        fullName: user.displayName!,
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

export default GoogleAuthentication;
