import * as S from "./styles";
import { useNavigate } from "@reach/router";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import {
  BsFillPersonFill,
  BsLockFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const FormRegister = () => {
  const navigation = useNavigate();

  const onClickButtonLogin = () => navigation("/login");

  return (
    <S.FormContent>
      <S.ControlsContainer>
        <FormControl icon={BsFillPersonFill} labelText="Nombre de usuario" />
        <FormControl
          type="email"
          icon={BsFillEnvelopeFill}
          labelText="Correo Electrónico"
        />
        <FormControl type="password" icon={BsLockFill} labelText="Contraseña" />
      </S.ControlsContainer>
      <S.ButtonContainer>
        <Button size="big" text="Terminar registro" />
        <Button
          size="big"
          color="yellow"
          text="Regresar al Login"
          onClick={onClickButtonLogin}
        />
      </S.ButtonContainer>
    </S.FormContent>
  );
};
export default FormRegister;
