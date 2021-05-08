import { FC, memo, useState } from "react";
import * as S from "./styles";

import useActive from "hooks/useActive";

import Button from "components/atoms/Button";
import CreatePuntuactionModal from "../../organisms/CreatePuntuactionModal";
import BOUserAuthPuntuaction from "components/molecules/BOUserAuthPuntuaction";

import { PuntuactionType } from "application/types/BranchOfficeModelType";

type UPuntuactionProps = {
  uAuthPuntuaction?: PuntuactionType;
};

const UserPuntuactionArea: FC<UPuntuactionProps> = ({ uAuthPuntuaction }) => {
  const { active, toggleActive } = useActive();
  const [hasUserPost, setHasUserPost] = useState(uAuthPuntuaction === null);

  const onChangeValoration = () => {
    //...
  };

  const onDeleteUserPuntuaction = () => {
    setHasUserPost(() => false);
  };

  if (hasUserPost) {
    return (
      <S.MainContainer>
        <BOUserAuthPuntuaction
          description={uAuthPuntuaction.description}
          stars={uAuthPuntuaction.stars}
        />
        <S.ButtonContainer>
          <Button text="Cambiar Valoracion" onClick={onChangeValoration} />
          <Button
            text="Borrar Valoracion"
            styles={{ color: "yellow" }}
            onClick={onDeleteUserPuntuaction}
          />
        </S.ButtonContainer>
      </S.MainContainer>
    );
  }

  return (
    <>
      <Button
        onClick={toggleActive}
        styles={{ size: "big" }}
        text="Dejar una valoracion"
      />
      {active && <CreatePuntuactionModal onClose={toggleActive} />}
    </>
  );
};

export default memo(UserPuntuactionArea);
