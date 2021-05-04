import { memo, useState } from "react";
import * as S from "./styles";

import Button from "components/atoms/Button";
import DarkScreen from "components/atoms/DarkScreen";
import Portals from "components/atoms/Portals";
import BOUserAuthPuntuaction from "components/molecules/BOUserAuthPuntuaction";

import useActive from "hooks/useActive";

const BOUserPuntuactionArea = () => {
  const { active, toggleActive } = useActive();

  const [hasUserPuntuaction, setHasUserPuntuaction] = useState<boolean>(true);

  const onChangeValoration = () => {
    //...
  };

  const onDeleteUserPuntuaction = () => {
    setHasUserPuntuaction(() => false);
  };

  return (
    <>
      {!hasUserPuntuaction ? (
        <Button
          onClick={toggleActive}
          styles={{ size: "big" }}
          text="Dejar una valoracion"
        />
      ) : (
        <S.MainContainer>
          <BOUserAuthPuntuaction />
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
