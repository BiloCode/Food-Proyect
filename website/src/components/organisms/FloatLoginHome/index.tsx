import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

const FloatLoginHome = () => (
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
      <Button text="Iniciar Sesión" />
      <Button color="yellow" text="Registrate gratis" />
    </S.ButtonContainer>
  </S.FormContent>
);

export default FloatLoginHome;
