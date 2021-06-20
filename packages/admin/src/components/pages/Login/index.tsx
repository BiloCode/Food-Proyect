import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import ApplicationIcon from "components/atoms/ApplicationIcon";

import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

import useLogin from "hooks/useLogin";

const Login: FC<RouteComponentProps> = () => {
  const { refs, emailStored, onSubmit, sendRequest } = useLogin();

  return (
    <S.MainContainer>
      <S.ImageContainer>
        <ApplicationIcon multiChromatic size="big" />
      </S.ImageContainer>
      <S.FormContainer onSubmit={onSubmit}>
        <S.ControlsContainer>
          <FormControl
            type="email"
            ref={refs.email}
            labelText="Usuario"
            icon={AiOutlineUser}
            defaultValue={emailStored}
          />
          <FormControl
            type="password"
            ref={refs.password}
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
