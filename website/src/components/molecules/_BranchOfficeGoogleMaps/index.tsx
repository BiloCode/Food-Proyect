import MapCredentials from "../Map";
import BranchOfficeMapSelected from "../_BranchOfficeMapSelect";
import * as S from "./styles";

const BranchOfficeGoogleMaps = () => {
  return (
    <S.Container>
      <BranchOfficeMapSelected stars={2} text="aea" tittle="manito" />
      <MapCredentials />
    </S.Container>
  );
};

export default BranchOfficeGoogleMaps;
