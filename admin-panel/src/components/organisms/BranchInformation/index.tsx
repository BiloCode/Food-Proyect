import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranch } from "store/currentBranch";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import BranchOfficeImageUpdateModal from "components/templates/BranchOfficeImageUpdateModal";
import FilesCheckingIsImage from "application/utils/FileCheckingIsImage";
import BranchOfficeUpdateLocation from "components/templates/BranchOfficeUpdateLocationModal";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";

import { useAtomValue } from "jotai/utils";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import useActive from "hooks/useActive";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranch);
  const { addToast } = useToasts();

  const [newImageBranch, setNewImageBranch] = useState<File>();

  const [isModalImageActive, setIsModalImageActive] = useState<boolean>(false);
  const [isModalLocationActive, setIsModalLocationActive] =
    useState<boolean>(false);

  const editActive = useActive();

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  const onClickImageModal = () => {
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
      setIsModalImageActive(true);
    });
  };

  const onClickLocationModal = () => {
    setIsModalLocationActive(true);
  };

  const onCloseImage = () => {
    setIsModalImageActive(false);
  };

  const onCloseLocation = () => {
    setIsModalLocationActive(false);
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
        onClick={editActive.toggleActive}
        isActive={editActive.active}
      />
      <BranchDetailContent
        data={{ id: pageData?.branch._id, title: "Imagen de Perfil" }}
        isActive={editActive.active}
        onClick={onClickImageModal}
        isModal
      />
      <BranchDetailContent
        data={{
          id: pageData?.branch._id,
          title: "Ubicación geofráfica",
          content: pageData?.branch.location.address,
        }}
        isActive={editActive.active}
        onClick={onClickLocationModal}
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
        isActive={editActive.active}
        onClick={editActive.toggleActive}
      />

      {isModalImageActive && (
        <BranchOfficeImageUpdateModal
          image={newImageBranch}
          onClose={onCloseImage}
        />
      )}

      {isModalLocationActive && (
        <BranchOfficeUpdateLocation onClose={onCloseLocation} />
      )}
    </S.Container>
  );
};

export default BranchInformation;
