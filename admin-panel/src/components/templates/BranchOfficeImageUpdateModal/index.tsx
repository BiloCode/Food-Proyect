import * as S from "./styles";

import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

import { IoMdImage } from "react-icons/io";
import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import useUpdateBranchImage from "hooks/useUpdateBranchImage";
import { useMemo } from "react";

type BranchOfficeImageUpdateModalProps = {
  image: File;
  onClose(): void;
};

const BranchOfficeImageUpdateModal = ({
  image,
  onClose,
}: BranchOfficeImageUpdateModalProps) => {
  const { updateImage, loadingPercentaje, setRequestState, requestState } =
    useUpdateBranchImage();

  const onClickUpdateImage = () => {
    updateImage(image);
  };

  useMemo(() => {
    if (requestState === "complete") {
      onClose();
      setRequestState("initialize");
    }
  }, [requestState]);

  return (
    <Portals>
      <DarkScreen>
        <S.Container>
          <S.ModalContainer>
            <Title>Cambiar de imagen</Title>

            <S.ImageDataContainer>
              <S.ImageName>
                <Icon size="medium" type={IoMdImage} />
                <Description size="medium" color="black">
                  {image.name}
                </Description>
              </S.ImageName>
              <Description size="medium" color="black">
                {Math.round(loadingPercentaje)}%
              </Description>
            </S.ImageDataContainer>

            <S.ButtonsContainer>
              <Button
                type="button"
                onClick={onClickUpdateImage}
                text="Actualizar Imagen"
                styles={{ color: "blue", size: "medium" }}
                isLoading={requestState === "loading"}
              />
              <Button
                type="button"
                text="Cerrar ventana"
                styles={{ color: "yellow", size: "medium" }}
                onClick={onClose}
              ></Button>
            </S.ButtonsContainer>
          </S.ModalContainer>
        </S.Container>
      </DarkScreen>
    </Portals>
  );
};

export default BranchOfficeImageUpdateModal;
