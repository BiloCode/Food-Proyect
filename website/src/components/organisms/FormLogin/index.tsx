import { useNavigate } from "@reach/router";
import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import useAuthentication from "hooks/useAuthentication";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

type FloatLoginHomeProps = {
  buttonBig?: boolean;
};

const FloatLoginHome = ({ buttonBig }: FloatLoginHomeProps) => {
  const {
    changePassword,
    changeUsername,
    onSubmitLoginForm,
  } = useAuthentication();

  const navigation = useNavigate();

  const onClickButtonRegister = () => navigation("/register");

  return (
    <S.FormContent onSubmit={onSubmitLoginForm}>
      <S.ControlsContainer>
        <FormControl
          type="email"
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
          onChange={changeUsername}
        />
        <FormControl
          type="password"
          icon={BsLockFill}
          labelText="Contraseña"
          onChange={changePassword}
        />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button
          type="submit"
          text="Iniciar Sesión"
          size={buttonBig ? "big" : "normal"}
        />
        <Button
          color="yellow"
          text="Registrate gratis"
          size={buttonBig ? "big" : "normal"}
          onClick={onClickButtonRegister}
        />
      </S.ButtonContainer>
    </S.FormContent>
  );
};
export default FloatLoginHome;
