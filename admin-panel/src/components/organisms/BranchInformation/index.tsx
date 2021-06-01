import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranchStore } from "store/currentBranchStore";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import useUpdateBranchAddress from "hooks/useUpdateBranchAddress";

import { useAtomValue } from "jotai/utils";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStateAddress, onUpdateAddress } = useUpdateBranchAddress();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  return (
    <S.Container>
      <BranchDetailContent
        tittle="Descripcion"
        id={pageData?.branch._id}
        content={pageData?.branch.description}
        onUpdate={onUpdateDescription}
        requestState={requestStateDescription}
      />
      <BranchDetailContent
        tittle="Imagen de perfil"
        id={pageData?.branch._id}
        content={pageData?.branch.bannerImage.url}
      />
      <BranchDetailContent
        tittle="Ubicacion geografica"
        id={pageData?.branch._id}
        content={pageData?.branch.location.address}
        onUpdate={onUpdateAddress}
        requestState={requestStateAddress}
      />
      <BranchDetailContent
        tittle="Numero de contacto"
        id={pageData?.branch._id}
        content={pageData?.branch.phoneNumber}
        onUpdate={onUpdatePhoneNumber}
        requestState={requestStatePhoneNumber}
      />
    </S.Container>
  );
};

export default BranchInformation;
