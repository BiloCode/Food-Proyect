import { FC, memo } from "react";

import useActive from "hooks/useActive";

import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import CreatePuntuactionModal from "../organisms/CreatePuntuactionModal";
import ButtonsPuntuactionArea from "components/organisms/ButtonsPuntuactionArea";

import { PuntuactionType } from "application/types/BranchOfficeModelType";

type UPuntuactionProps = {
  uAuthPuntuaction?: PuntuactionType;
};

const UserPuntuactionArea: FC<UPuntuactionProps> = ({ uAuthPuntuaction }) => {
  const { active, toggleActive } = useActive();

  return (
    <>
      {uAuthPuntuaction ? (
        <ButtonsPuntuactionArea
          onActiveMenu={toggleActive}
          puntuactionData={uAuthPuntuaction}
        />
      ) : (
        <Button
          onClick={toggleActive}
          styles={{ size: "big" }}
          text="Dejar una valoracion"
        />
      )}
      {active && (
        <Portals>
          <CreatePuntuactionModal
            onClose={toggleActive}
            defaultStars={uAuthPuntuaction?.stars || 0}
            defaultDescription={uAuthPuntuaction?.description || ""}
          />
        </Portals>
      )}
    </>
  );
};

export default memo(UserPuntuactionArea);