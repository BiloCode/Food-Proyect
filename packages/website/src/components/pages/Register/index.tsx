import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import Title from "components/atoms/Title";
import NavigationBar from "components/organisms/NavigationBar";
import FormRegister from "components/organisms/FormRegister";

const Login: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <S.ContainerBody>
      <S.TitleContainer>
        <Title color="black" size="medium">
          Registrate ahora en bembos online!
        </Title>
      </S.TitleContainer>
      <S.FormContainer>
        <FormRegister />
      </S.FormContainer>
    </S.ContainerBody>
  </div>
);

export default Login;
