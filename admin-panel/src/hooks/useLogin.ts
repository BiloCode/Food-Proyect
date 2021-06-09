import { FormEvent, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import firebase from "firebase";

import { useAtom } from "jotai";
import { userEmailStore } from "store/userEmailStore";

const useLogin = () => {
  const { addToast } = useToasts();

  const [sendRequest, setSendRequest] = useState(false);
  const [emailStored, setEmailStored] = useAtom(userEmailStore);

  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const auth = firebase.auth();
    const emailFormated = email.current.value.trim();
    const passwordFormated = password.current.value.trim();

    if (!emailFormated || !passwordFormated) {
      addToast("Aun existen campos vacios.", { appearance: "warning" });
      return;
    }

    setSendRequest(() => true);

    try {
      await auth.signInWithEmailAndPassword(emailFormated, passwordFormated);
      setEmailStored(emailFormated);
      addToast("Bienvenido al sistema.");
    } catch (error) {
      addToast(error.message, { appearance: "error" });
      setSendRequest(() => false);
    }
  };

  return {
    onSubmit,
    emailStored,
    sendRequest,
    refs: {
      email,
      password,
    },
  };
};

export default useLogin;
