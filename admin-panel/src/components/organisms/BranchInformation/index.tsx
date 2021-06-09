import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranchStore } from "store/currentBranchStore";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import BranchOfficeImageUpdateModal from "components/organisms/BranchOfficeImageUpdateModal";
import FilesCheckingIsImage from "application/utils/FileCheckingIsImage";
import BranchOfficeUpdateLocation from "../BranchOfficeUpdateLocationModal";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";

import { useAtomValue } from "jotai/utils";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);
  const { addToast } = useToasts();

  const [isActiveEdit, setIsActiveEdit] = useState<boolean>(true);
  const [newImageBranch, setNewImageBranch] = useState<File>();

  const [isActiveImageModal, setIsActiveImageModal] = useState<boolean>(false);

  const [isActiveLocationModal, setIsActiveLocationModal] =
    useState<boolean>(false);

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  const onClick = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  const onClickImage = () => {
    const inputFile = document.createElement<"input">("input");
    inputFile.setAttribute("type", "file");
    inputFile.setAttribute("accept", "image/*");
    inputFile.click();

    inputFile.addEventListener("change", (ev) => {
      const files = (ev.currentTarget as HTMLInputElement).files;
      const imagesUploaded = FilesCheckingIsImage.check(files);
      if (imagesUploaded.length !== 1) {
        addToast("Seleccione una imagen correcta", { appearance: "warning" });
        return;
      }
      setNewImageBranch(files[0]);
      setIsActiveImageModal(true);
    });
  };

  const onCloseImageModal = () => {
    setIsActiveImageModal(false);
  };

  const onClickModalLocation = () => {
    setIsActiveLocationModal(true);
  };

  const onCloseLocationModal = () => {
    setIsActiveLocationModal(false);
  };

  return (
    <S.Container>
      <BranchDetailContent
        data={{
          id: pageData?.branch._id,
          title: "Descripcion",
          content: pageData?.branch.description,
        }}
        onUpdate={onUpdateDescription}
        isLoading={requestStateDescription === "loading"}
        onClick={onClick}
        isActive={isActiveEdit}
      />
      <BranchDetailContent
        data={{ id: pageData?.branch._id, title: "Imagen de Perfil" }}
        isActive={isActiveEdit}
        onClickModalFile={onClickImage}
        isModal
        isFile
      />
      <BranchDetailContent
        data={{ id: pageData?.branch._id, title: "Ubicación geofráfica" }}
        isActive={isActiveEdit}
        onClick={onClickModalLocation}
        isModal
      />
      <BranchDetailContent
        data={{
          id: pageData?.branch._id,
          title: "Numero de contacto",
          content: pageData?.branch.phoneNumber,
        }}
        onUpdate={onUpdatePhoneNumber}
        isLoading={requestStatePhoneNumber === "loading"}
        onClick={onClick}
        isActive={isActiveEdit}
      />

      {isActiveImageModal && (
        <BranchOfficeImageUpdateModal
          onClose={onCloseImageModal}
          image={newImageBranch}
        />
      )}

      {isActiveLocationModal && (
        <BranchOfficeUpdateLocation onClose={onCloseLocationModal} />
      )}
    </S.Container>
  );
};

export default BranchInformation;
