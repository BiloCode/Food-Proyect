import { useState } from "react";

const useAuthentication = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitLoginForm = () => {};

  return {
    onSubmitLoginForm,
  };
};

export default useAuthentication;
