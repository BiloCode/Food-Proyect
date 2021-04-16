import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import {
  BsFillPersonFill,
  BsLockFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { useNavigate } from "@reach/router";

type FloatLoginHomeProps = {
  buttonBig?: boolean;
};

const FloatRegistorHome = ({ buttonBig }: FloatLoginHomeProps) => {
  const navigation = useNavigate();

  const onClickButtonLogin = () => navigation("/login");

  return (
    <S.FormContent>
      <S.ControlsContainer>
        <FormControl
          type="email"
          icon={BsFillPersonFill}
          labelText="Nombre de usuario"
        />
        <FormControl
          type="email"
          icon={BsFillEnvelopeFill}
          labelText="Correo Electrónico"
        />

        <FormControl type="password" icon={BsLockFill} labelText="Contraseña" />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button size={buttonBig ? "big" : "normal"} text="Terminar registro" />
        <Button
          color="yellow"
          text="Regresar al Login"
          size={buttonBig ? "big" : "normal"}
          onClick={onClickButtonLogin}
        />
      </S.ButtonContainer>
    </S.FormContent>
  );
};
export default FloatRegistorHome;
