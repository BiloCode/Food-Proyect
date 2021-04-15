import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

type FloatLoginHomeProps = {
  buttonBig?: boolean;
};

const FloatLoginHome = ({ buttonBig }: FloatLoginHomeProps) => (
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
      />
    </S.ButtonContainer>
  </S.FormContent>
);

export default FloatLoginHome;
