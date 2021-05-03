import BranchOfficeMapSelected from "../BranchOfficeMapSelect";
import MapCredentials from "../Map";
import * as S from "./styles";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeTypes = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

type BranchOfficeMapProps = {
  mapCoords: BranchOfficeTypes;
};

const BranchOfficeGoogleMaps = ({ mapCoords }: BranchOfficeMapProps) => {
  return (
    <S.Container>
      {(mapCoords.latitude !== 0 || mapCoords.length !== 0) && (
        <S.BranchOfficeSelected>
          <BranchOfficeMapSelected
            stars={mapCoords.stars}
            tittle={mapCoords.tittle}
            text={mapCoords.text}
          />
        </S.BranchOfficeSelected>
      )}
      <MapCredentials latitude={mapCoords.latitude} length={mapCoords.length} />
    </S.Container>
  );
};

export default BranchOfficeGoogleMaps;
