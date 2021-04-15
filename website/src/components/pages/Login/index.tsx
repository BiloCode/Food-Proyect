import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import Title from "components/atoms/Title";
import FormLogin from "components/organisms/FormLogin";
import NavigationBar from "components/organisms/NavigationBar";

const Login: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <S.ContainerBody>
      <S.TitleContainer>
        <Title color="black" size="medium">
          Bienvenidos a bembos online!
        </Title>
      </S.TitleContainer>
      <S.FormContainer>
        <FormLogin buttonBig />
      </S.FormContainer>
      <S.BottomMessage>
        Registrate con google <span>presionando aqui</span>
      </S.BottomMessage>
    </S.ContainerBody>
  </div>
);

export default Login;
