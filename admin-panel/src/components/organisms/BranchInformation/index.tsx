import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranchStore } from "store/currentBranchStore";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import useUpdateBranchAddress from "hooks/useUpdateBranchAddress";

import { useAtomValue } from "jotai/utils";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";
import { useState } from "react";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);
  const [isActiveEdit, setIsActiveEdit] = useState<boolean>(true);

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStateAddress, onUpdateAddress } = useUpdateBranchAddress();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  const onClick = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  return (
    <S.Container>
      <BranchDetailContent
        title="Descripcion"
        id={pageData?.branch._id}
        content={pageData?.branch.description}
        onUpdate={onUpdateDescription}
        requestState={requestStateDescription}
        onClick={onClick}
        active={isActiveEdit}
      />
      <BranchDetailContent
        title="Imagen de perfil"
        id={pageData?.branch._id}
        content={pageData?.branch.bannerImage.url}
        onClick={onClick}
        active={isActiveEdit}
      />
      <BranchDetailContent
        title="Ubicacion geografica"
        id={pageData?.branch._id}
        content={pageData?.branch.location.address}
        onUpdate={onUpdateAddress}
        requestState={requestStateAddress}
        onClick={onClick}
        active={isActiveEdit}
      />
      <BranchDetailContent
        title="Numero de contacto"
        id={pageData?.branch._id}
        content={pageData?.branch.phoneNumber}
        onUpdate={onUpdatePhoneNumber}
        requestState={requestStatePhoneNumber}
        onClick={onClick}
        active={isActiveEdit}
      />
    </S.Container>
  );
};

export default BranchInformation;
