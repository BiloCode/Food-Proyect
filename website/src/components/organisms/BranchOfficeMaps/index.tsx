import * as S from "./styles";
import { IoMdSearch } from "react-icons/io";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import Title from "components/atoms/Title";
import BranchOfficeMapItem from "components/molecules/BranchOfficeMapItem";
import image from "assets/images/BranchOfficeBembos.jpg";
import BranchOfficeMapSelected from "components/molecules/BranchOfficeMapSelect";
import { useState } from "react";
import MapCredentials from "components/molecules/Map";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeTypes = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

const BranchOfficeMaps = () => {
  const [mapCoords, setMapCoords] = useState<BranchOfficeTypes>({
    latitude: 0,
    length: 0,
    text: "",
    tittle: "",
    stars: 0,
  });

  const onClickBranchOffice = ({
    latitude,
    length,
    tittle,
    text,
    stars,
  }: BranchOfficeTypes) => {
    setMapCoords({ latitude, length, tittle, text, stars });
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput>
          <InputPlaceholderIcon icon={IoMdSearch} text="Escribe un nombre..." />
        </S.SearchInput>
      </S.SearchContainer>
      <S.SearchListContainer>
        <S.TittleContainer>
          <Title color="blue" size="medium" lowercase>
            Lugares más cercanos (15)
          </Title>
        </S.TittleContainer>
        <S.MapListContainer>
          <S.ListBranchOffice>
            <BranchOfficeMapItem
              tittle="Sucursal Huaycan"
              text="Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm"
              image={image}
              onClick={() =>
                onClickBranchOffice({
                  latitude: -12.008734979054598,
                  length: -76.82457079149549,
                  tittle: "Sucursal Huaycan",
                  text:
                    "Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm",
                  stars: 2,
                })
              }
            />
            <BranchOfficeMapItem
              tittle="Sucursal Mega Plaza"
              text="Sucursal 2"
              image={image}
              onClick={() =>
                onClickBranchOffice({
                  latitude: -11.992700403536038,
                  length: -77.05174180025324,
                  tittle: "Sucursal Mega Plaza",
                  text:
                    "Sucursal Mega Plaza lorem imptusm lorem imptusm lorem imptusm",
                  stars: 3,
                })
              }
            />
            <BranchOfficeMapItem
              tittle="Sucursal Plaza Norte"
              text="Sucursal 3"
              image={image}
              onClick={() =>
                onClickBranchOffice({
                  latitude: -12.00687445636363,
                  length: -77.05816660531731,
                  tittle: "Sucursal Plaza Norte",
                  text:
                    "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
                  stars: 4,
                })
              }
            />
          </S.ListBranchOffice>
          <S.MapContainer>
            {(mapCoords.latitude !== 0 || mapCoords.length !== 0) && (
              <S.BranchOfficeSelected>
                <BranchOfficeMapSelected
                  stars={mapCoords.stars}
                  tittle={mapCoords.tittle}
                  text={mapCoords.text}
                />
              </S.BranchOfficeSelected>
            )}
            <MapCredentials
              latitude={mapCoords.latitude}
              length={mapCoords.length}
            />
          </S.MapContainer>
        </S.MapListContainer>
      </S.SearchListContainer>
    </S.Container>
  );
};

export default BranchOfficeMaps;
