import firebase from "firebase";

class CreateNewUserWithEmail {
  public static exec = async (email: string, password: string) => {
    const auth = firebase.auth();

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const userAuth = result.user;
      if (!userAuth) {
        return null;
      }

      return {
        _id: userAuth.uid,
        profileImage: userAuth.photoURL,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default CreateNewUserWithEmail;
