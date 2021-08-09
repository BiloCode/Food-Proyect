import { useNavigate } from "@reach/router";
import * as S from "./styles";

import FormControl from "components/molecules/FormControl";
import { Button } from "@food-proyect/shared-components";

import useAuthentication from "hooks/useAuthentication";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

type FloatLoginHomeProps = {
  buttonBig?: boolean;
};

const FloatLoginHome = ({ buttonBig }: FloatLoginHomeProps) => {
  const { isLoading, passwordRef, usernameRef, onSubmitLoginForm } =
    useAuthentication();

  const navigation = useNavigate();

  const onClickButtonRegister = () => navigation("/register");

  return (
    <S.FormContent onSubmit={onSubmitLoginForm}>
      <S.ControlsContainer>
        <FormControl
          type="email"
          ref={usernameRef}
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
        />
        <FormControl
          type="password"
          icon={BsLockFill}
          ref={passwordRef}
          labelText="Contraseña"
        />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button
          type="submit"
          text="Iniciar Sesión"
          isLoading={isLoading}
          styles={{ size: buttonBig ? "big" : "normal" }}
        />
        <Button
          styles={{ size: buttonBig ? "big" : "normal", color: "yellow" }}
          text="Registrate gratis"
          onClick={onClickButtonRegister}
        />
      </S.ButtonContainer>
    </S.FormContent>
  );
};
export default FloatLoginHome;
