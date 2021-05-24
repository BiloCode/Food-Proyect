import { useToasts } from "react-toast-notifications";
import { FormEvent, useRef, useState } from "react";

import CreateNewUser from "application/core/CreateNewUser";
import CreateNewUserWithEmail from "application/core/CreateNewUserWithEmail";

const useCreateUserWithEmail = () => {
  const { addToast } = useToasts();

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

    const createUserEmailService = new CreateNewUserWithEmail();

    const userData = await createUserEmailService.__invoke(
      usernameFormatted,
      emailFormatted,
      passwordFormatted
    );

    if (!userData) {
      setIsLoading(() => false);
      addToast("Este usuario ya se encuentra registrado.", {
        appearance: "warning",
      });
      return;
    }

    const createUserService = new CreateNewUser();

    const isCreated = createUserService.__invoke({
      _id: userData._id,
      data: {
        email: userData.email,
        fullName: userData.fullName,
        profileImage: userData.profileImage,
      },
      type: "email",
    });

    setIsLoading(() => false);

    if (!isCreated) {
      addToast("Ocurrio un error al crear el usuario.", {
        appearance: "error",
      });
      return;
    }

    addToast("Usuario creado correctamente, bienvenido.");
  };

  return {
    isLoading,
    onSubmitFormRegister,
    usernameRef,
    emailRef,
    passwordRef,
  };
};

export default useCreateUserWithEmail;
