import BranchDetailContent from "components/molecules/BranchDetailContent";
import { useAtomValue } from "jotai/utils";
import { currentBranchStore } from "store/currentBranchStore";
import * as S from "./styles";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);

  return (
    <S.Container>
      <BranchDetailContent
        tittle="Descripcion"
        id={pageData?.branch._id}
        content={pageData?.branch.description}
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
      />
      <BranchDetailContent
        tittle="Numero de conacto"
        id={pageData?.branch._id}
        content={pageData?.branch.phoneNumber}
      />
    </S.Container>
  );
};

export default BranchInformation;
