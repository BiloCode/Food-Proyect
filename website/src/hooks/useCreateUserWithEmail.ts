import CreateNewUser from "application/core/CreateNewUser";
import CreateNewUserWithEmail from "application/core/CreateNewUserWithEmail";
import { FormEvent, useRef, useState } from "react";

const useCreateUserWithEmail = () => {
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
      alert("Usuario ya existe");
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

    if (!isCreated) return;
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
