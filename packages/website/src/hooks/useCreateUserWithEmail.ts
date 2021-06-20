import { FormEvent, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";

import CreateNewUser from "application/core/auth/CreateNewUser";
import EmailAuthentication from "application/core/auth/EmailAuthentication";

const useCreateUserWithEmail = () => {
  const { addToast } = useToasts();

  const fullNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitFormRegister = async (ev: FormEvent) => {
    ev.preventDefault();

    const fullName = fullNameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!fullName || !password || !email) {
      addToast("Existen campos vacios.", { appearance: "warning" });
      return;
    }

    setIsLoading(() => true);

    const userData = await EmailAuthentication.exec(email, password);

    if (!userData) {
      setIsLoading(() => false);
      addToast("Este usuario ya se encuentra registrado.", {
        appearance: "warning",
      });
      return;
    }

    const isCreated = await CreateNewUser.exec({
      _id: userData._id,
      type: "email",
      data: {
        email: email,
        fullName: fullName,
        profileImage: {
          name: "",
          url: userData.profileImage,
        },
      },
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
    fullNameRef,
    emailRef,
    passwordRef,
  };
};

export default useCreateUserWithEmail;
