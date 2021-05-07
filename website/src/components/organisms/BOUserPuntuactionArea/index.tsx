import { FC, memo, useState } from "react";
import * as S from "./styles";

import { PuntuactionType } from "application/types/BranchOfficeModelType";

import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import BOUserAuthPuntuaction from "components/molecules/BOUserAuthPuntuaction";

import useActive from "hooks/useActive";

type BOUserPuntuactionProps = {
  userAuthPuntuaction?: PuntuactionType;
};

const BOUserPuntuactionArea: FC<BOUserPuntuactionProps> = ({
  userAuthPuntuaction,
}) => {
  const { active, toggleActive } = useActive();
  const [hasUserPuntuaction, setHasUserPuntuaction] = useState<boolean>(
    userAuthPuntuaction !== null
  );

  const onChangeValoration = () => {
    //...
  };

  const onDeleteUserPuntuaction = () => {
    setHasUserPuntuaction(() => false);
  };

  return (
    <>
      {hasUserPuntuaction ? (
        <Button
          onClick={toggleActive}
          styles={{ size: "big" }}
          text="Dejar una valoracion"
        />
      ) : (
        <S.MainContainer>
          <BOUserAuthPuntuaction
            description={userAuthPuntuaction.description}
            stars={userAuthPuntuaction.stars}
          />
          <S.ButtonContainer>
            <Button text="Cambiar Valoracion" onClick={onChangeValoration} />
            <Button
              text="Borrar Valoracion"
              styles={{ color: "red" }}
              onClick={onDeleteUserPuntuaction}
            />
          </S.ButtonContainer>
        </S.MainContainer>
      )}
      {active && (
        <Portals>
          <DarkScreen></DarkScreen>
        </Portals>
      )}
    </>
  );
};

export default memo(BOUserPuntuactionArea);
