import { FC, FormEvent, useRef, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import firebase from "firebase";
import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import ApplicationIcon from "components/atoms/ApplicationIcon";

import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

import { useToasts } from "react-toast-notifications";

import { useAtom } from "jotai";
import { userEmailStore } from "store/userEmailStore";

const Login: FC<RouteComponentProps> = () => {
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
    } catch (error) {
      addToast(error.message, { appearance: "error" });
      setSendRequest(() => false);
    }
  };

  return (
    <S.MainContainer>
      <S.ImageContainer>
        <ApplicationIcon multiChromatic size="big" />
      </S.ImageContainer>
      <S.FormContainer onSubmit={onSubmit}>
        <S.ControlsContainer>
          <FormControl
            ref={email}
            type="email"
            labelText="Usuario"
            icon={AiOutlineUser}
            defaultValue={emailStored}
          />
          <FormControl
            ref={password}
            type="password"
            icon={AiOutlineLock}
            labelText="Contraseña"
          />
        </S.ControlsContainer>
        <Button
          type="submit"
          text="Ingresar"
          isLoading={sendRequest}
          styles={{ size: "big" }}
        />
      </S.FormContainer>
    </S.MainContainer>
  );
};

export default Login;
