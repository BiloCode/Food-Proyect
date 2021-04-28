import firebase from "firebase";

class EmailAuthentication {
  public __invoke = async (email: string, password: string) => {
    const auth = firebase.auth();

    try {
      const userSigned = await auth.signInWithEmailAndPassword(email, password);

      return userSigned;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default EmailAuthentication;
