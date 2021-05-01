import firebase from "firebase";
import { FormEvent, useRef, useState } from "react";

const useCreatUserWithEmail = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitFormRegister = async (ev: FormEvent) => {
    ev.preventDefault();

    const usernameFormatted = usernameRef.current.value.trim();
    const emailFormatted = emailRef.current.value.trim();
    const passwordFormatted = passwordRef.current.value.trim();

    if (!usernameFormatted || !passwordFormatted || !emailFormatted) return;

    setIsLoading(() => true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailFormatted, passwordFormatted);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(() => false);
    }
  };

  return {
    isLoading,
    onSubmitFormRegister,
    usernameRef,
    emailRef,
    passwordRef,
  };
};

export default useCreatUserWithEmail;
