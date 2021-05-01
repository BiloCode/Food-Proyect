import * as S from "./styles";
import { useNavigate } from "@reach/router";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import {
  BsFillPersonFill,
  BsLockFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import useCreatUserWithEmail from "hooks/useCreatUserWithEmail";

const FormRegister = () => {
  const navigation = useNavigate();

  const onClickButtonLogin = () => navigation("/login");

  const {
    isLoading,
    onSubmitFormRegister,
    usernameRef,
    emailRef,
    passwordRef,
  } = useCreatUserWithEmail();

  return (
    <S.FormContent onSubmit={onSubmitFormRegister}>
      <S.ControlsContainer>
        <FormControl
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
          ref={usernameRef}
        />
        <FormControl
          type="email"
          icon={BsFillEnvelopeFill}
          labelText="Correo Electrónico"
          ref={emailRef}
        />
        <FormControl
          type="password"
          icon={BsLockFill}
          labelText="Contraseña"
          ref={passwordRef}
        />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button
          type="submit"
          styles={{ size: "big" }}
          text="Terminar registro"
          isLoading={isLoading}
        />
        <Button
          styles={{ size: "big", color: "yellow" }}
          text="Regresar al Login"
          onClick={onClickButtonLogin}
        />
      </S.ButtonContainer>
    </S.FormContent>
  );
};
export default FormRegister;
