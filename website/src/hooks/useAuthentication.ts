import firebase from "firebase";
import { FormEvent, useRef, useState } from "react";

const useAuthentication = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitLoginForm = async (ev: FormEvent) => {
    ev.preventDefault();

    const usernameFormatted = usernameRef.current.value.trim();
    const passwordFormatted = passwordRef.current.value.trim();

    if (!usernameFormatted || !passwordFormatted) return;

    setIsLoading(() => true);

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(usernameFormatted, passwordFormatted);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(() => false);
    }
  };

  return {
    isLoading,
    onSubmitLoginForm,
    usernameRef,
    passwordRef,
  };
};

export default useAuthentication;
