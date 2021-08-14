import * as S from "./styles";
import { Link } from "@reach/router";
import { Title, Button, SearchIcon, EnterpriseFavicon } from "@food/components";

import routes from "config/navigation_routes";
import useNavigateRouter from "hooks/useNavigateRouter";
import CircularImage from "components/atoms/CircularImage";

import { useAuthContext } from "context/AuthContext/context";
import PageLimiter from "components/atoms/PageLimiter";
import BetweenSeparate from "components/atoms/BetweenSeparate";

const NavigationBar = () => {
  const { user } = useAuthContext();
  const { navigateToLogin, navigateToRegister, navigateToProfile } =
    useNavigateRouter();

  return (
    <S.MainContainer>
      <S.TopContainer>
        <PageLimiter>
          <BetweenSeparate>
            <EnterpriseFavicon />
            {!user ? (
              <S.ButtonContainer>
                <Button text="Iniciar Sesion" onClick={navigateToLogin} />
                <Button
                  text="Registrate Ahora"
                  ghost
                  onClick={navigateToRegister}
                />
              </S.ButtonContainer>
            ) : (
              <S.UserContainer onClick={navigateToProfile(user._id)}>
                <S.UserText>
                  <Title size="small" weight="e-bold">
                    {user.fullName}
                  </Title>
                  <span>{user.puntuaction.store.length} reseñas</span>
                </S.UserText>
                <CircularImage src={user.profileImage.url} />
              </S.UserContainer>
            )}
          </BetweenSeparate>
        </PageLimiter>
      </S.TopContainer>
      <S.BottomContainer>
        <PageLimiter>
          <BetweenSeparate>
            <S.OptionList>
              {routes.map((v, i) => (
                <S.Option key={i} as={Link} to={v.link}>
                  {v.name}
                </S.Option>
              ))}
            </S.OptionList>
            <SearchIcon />
          </BetweenSeparate>
        </PageLimiter>
      </S.BottomContainer>
    </S.MainContainer>
  );
};

export default NavigationBar;
