import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranchStore } from "store/currentBranchStore";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import useUpdateBranchAddress from "hooks/useUpdateBranchAddress";

import { useAtomValue } from "jotai/utils";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import BranchOfficeImageUpdateModal from "../BranchOfficeImageUpdateModal";
import FilesCheckingIsImage from "application/utils/FileCheckingIsImage";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);
  const [isActiveEdit, setIsActiveEdit] = useState<boolean>(true);
  const [newImageBranch, setNewImageBranch] = useState<File>();

  const [isActiveImageModal, setIsActiveImageModal] = useState<boolean>(false);

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStateAddress, onUpdateAddress } = useUpdateBranchAddress();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  const onClick = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  /* const onClickImage = () => {
    setIsActiveImageModal(true);
  }; */

  const onCloseImageModal = () => {
    setIsActiveImageModal(false);
  };

  const onChangeImage: ChangeEventHandler<HTMLInputElement> = (
    v: ChangeEvent<HTMLInputElement>
  ) => {
    const files = v.target.files;
    const imagesUploaded = FilesCheckingIsImage.check(files);
    if (imagesUploaded.length !== 1) {
      alert("Seleccione una imagen valida");
      return;
    }
    setNewImageBranch(files[0]);
    setIsActiveImageModal(true);
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
        isLoading={requestStateDescription === "loading"}
        isActive={isActiveEdit}
        onChangeImage={onChangeImage}
        isModal
        isFile
      />
      <BranchDetailContent
        data={{ id: pageData?.branch._id, title: "Ubicación geofráfica" }}
        onUpdate={onUpdateAddress}
        isLoading={requestStateAddress === "loading"}
        onClick={onClick}
        isActive={isActiveEdit}
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
    </S.Container>
  );
};

export default BranchInformation;
