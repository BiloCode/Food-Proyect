import { FC, FormEvent, useRef, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import firebase from "firebase";
import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import ApplicationIcon from "components/atoms/ApplicationIcon";

import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Login: FC<RouteComponentProps> = () => {
  const [sendRequest, setSendRequest] = useState(false);

  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const auth = firebase.auth();

    setSendRequest(() => true);

    try {
      await auth.signInWithEmailAndPassword(
        email.current.value,
        password.current.value
      );
    } catch (error) {
      console.log(error);
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
