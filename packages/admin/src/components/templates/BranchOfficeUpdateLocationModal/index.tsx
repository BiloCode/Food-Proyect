import * as S from "./styles";

import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import BranchLocationManuallyUpdate from "../../organisms/BranchLocationManuallyUpdate";

import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { IoIosClose } from "react-icons/io";

type BranchOfficeUpdateLocationModalProps = {
  onClose(): void;
};

const BranchOfficeUpdateLocationModal = ({
  onClose,
}: BranchOfficeUpdateLocationModalProps) => {
  const { addToast } = useToasts();

  const [isActiveManually, setIsActiveManually] = useState<boolean>(false);

  const onClickManually = () => {
    setIsActiveManually(true);
  };

  const onClickGoogleMaps = () => {
    addToast("Esta opción estará disponible pronto !!", { appearance: "info" });
  };

  return (
    <Portals>
      <DarkScreen>
        <S.Container>
          <S.ModalContainer>
            <S.IconClose onClick={onClose}>
              <Icon type={IoIosClose} size="big" />
            </S.IconClose>
            <S.TittleContainer>
              <Title>ACTUALIZAR UBICACION</Title>
              {!isActiveManually && (
                <Description color="black" size="small" bold="semi-bold">
                  Elige una de las 2 formas para actualizar la informacion
                </Description>
              )}
            </S.TittleContainer>

            {!isActiveManually && (
              <S.ButtonsContainer>
                <Button
                  type="button"
                  text="Manualmente"
                  styles={{ color: "blue", size: "medium" }}
                  onClick={onClickManually}
                />
                <Button
                  type="button"
                  text="Google maps"
                  styles={{ color: "yellow", size: "medium" }}
                  onClick={onClickGoogleMaps}
                />
              </S.ButtonsContainer>
            )}
            {isActiveManually && (
              <BranchLocationManuallyUpdate onClose={onClose} />
            )}
          </S.ModalContainer>
        </S.Container>
      </DarkScreen>
    </Portals>
  );
};

export default BranchOfficeUpdateLocationModal;
