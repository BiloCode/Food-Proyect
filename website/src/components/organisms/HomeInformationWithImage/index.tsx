import HomeInformation from "components/molecules/HomeInformation";
import MoleculeHomeInformationImage from "components/molecules/HomeInformationImage";
import * as S from "./styles";

const OrganismHomeInformation = () => {
  return (
    <S.HomeInformation>
      <MoleculeHomeInformationImage />
      <HomeInformation />
    </S.HomeInformation>
  );
};

export default OrganismHomeInformation;
