import firebase from "firebase";
import { ChangeEvent, FormEvent, useState } from "react";

const useAuthentication = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeUsername = (ev: ChangeEvent<HTMLInputElement>) => {
    setUsername(() => ev.target.value);
  };

  const changePassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => ev.target.value);
  };

  const onSubmitLoginForm = async (ev: FormEvent) => {
    ev.preventDefault();

    const usernameFormatted = username.trim();
    const passwordFormatted = password.trim();

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
    changePassword,
    changeUsername,
    onSubmitLoginForm,
  };
};

export default useAuthentication;
