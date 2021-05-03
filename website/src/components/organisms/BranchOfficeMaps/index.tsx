import * as S from "./styles";
import { IoMdSearch } from "react-icons/io";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import Title from "components/atoms/Title";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import useMapListSelected from "hooks/useMapListSelected";
import BranchOfficeGoogleMaps from "components/molecules/BranchOfficeGoogleMaps";

const BranchOfficeMaps = () => {
  const { mapCoords, onClickBranchOffice } = useMapListSelected();

  return (
    <S.Container>
      <S.SearchContainer>
        <InputPlaceholderIcon icon={IoMdSearch} text="Escribe un nombre..." />
      </S.SearchContainer>

      <S.MapContainer>
        <Title color="blue" size="medium" lowercase>
          Lugares más cercanos (15)
        </Title>

        <BranchOfficeMapList onClickBranchOffice={onClickBranchOffice} />

        <S.GoogleMap>
          <BranchOfficeGoogleMaps mapCoords={mapCoords} />
        </S.GoogleMap>
      </S.MapContainer>
    </S.Container>
  );
};

export default BranchOfficeMaps;
