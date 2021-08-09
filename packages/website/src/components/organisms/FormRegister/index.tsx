import * as S from "./styles";
import { useNavigate } from "@reach/router";

import FormControl from "components/molecules/FormControl";
import { Button } from "@food-proyect/shared-components";

import useCreateUserWithEmail from "hooks/useCreateUserWithEmail";

import {
  BsFillPersonFill,
  BsLockFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const FormRegister = () => {
  const navigate = useNavigate();
  const {
    emailRef,
    isLoading,
    passwordRef,
    fullNameRef,
    onSubmitFormRegister,
  } = useCreateUserWithEmail();

  const onClickButtonLogin = () => navigate("/login");

  return (
    <S.FormContent onSubmit={onSubmitFormRegister}>
      <S.ControlsContainer>
        <FormControl
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
          ref={fullNameRef}
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
