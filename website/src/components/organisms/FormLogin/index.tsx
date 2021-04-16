import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";
import { useNavigate } from "@reach/router";

type FloatLoginHomeProps = {
  buttonBig?: boolean;
};

const FloatLoginHome = ({ buttonBig }: FloatLoginHomeProps) => {
  const navigation = useNavigate();

  const onClickButtonRegister = () => navigation("/register");

  return (
    <S.FormContent>
      <S.ControlsContainer>
        <FormControl
          type="email"
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
        />

        <FormControl type="password" icon={BsLockFill} labelText="Contraseña" />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button size={buttonBig ? "big" : "normal"} text="Iniciar Sesión" />
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
