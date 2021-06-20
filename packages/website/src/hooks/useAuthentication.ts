import firebase from "firebase";
import { FormEvent, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";

const useAuthentication = () => {
  const { addToast } = useToasts();

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitLoginForm = async (ev: FormEvent) => {
    ev.preventDefault();

    const usernameFormatted = usernameRef.current.value.trim();
    const passwordFormatted = passwordRef.current.value.trim();

    if (!usernameFormatted || !passwordFormatted) {
      addToast("Existen campos vacios.", { appearance: "warning" });
      return;
    }

    setIsLoading(() => true);

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(usernameFormatted, passwordFormatted);

      addToast(`El inicio de sesión se efectuo correctamente.`, {
        appearance: "success",
      });
    } catch (error) {
      addToast(error.message, { appearance: "error" });
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
