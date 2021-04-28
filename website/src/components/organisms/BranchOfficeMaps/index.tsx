import * as S from "./styles";
import { IoMdSearch } from "react-icons/io";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import Title from "components/atoms/Title";
import BranchOfficeMapItem from "components/molecules/BranchOfficeMapItem";
import image from "assets/images/BranchOfficeBembos.jpg";
import faker from "faker";
import Map from "components/molecules/Map";
import { credentials } from "config/googleMapsCredentials";
import Spinner from "components/atoms/Spinner";
import BranchOfficeMapSelected from "components/molecules/BranchOfficeMapSelect";
import { useState } from "react";

const BranchOfficeMaps = () => {
  const [latitude, setLatitude] = useState(0);
  const [lenght, setLenght] = useState(0);

  const onClickBranchOffice = (lat: number, leng: number) => {
    setLatitude(lat);
    setLenght(leng);
  };

  console.log(latitude);
  console.log(lenght);

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
            <div
              onClick={() =>
                onClickBranchOffice(-12.008734979054598, -76.82457079149549)
              }
            >
              <BranchOfficeMapItem
                tittle="Sucursal Mega Plaza"
                text="Sucursal 1"
                image={image}
              />
            </div>
            <div
              onClick={() =>
                onClickBranchOffice(-11.008734979054598, -75.82457079149549)
              }
            >
              <BranchOfficeMapItem
                tittle="Sucursal Mega Plaza"
                text="Sucursal 2"
                image={image}
              />
            </div>
            <div
              onClick={() =>
                onClickBranchOffice(-13.008734979054598, -72.82457079149549)
              }
            >
              <BranchOfficeMapItem
                tittle="Sucursal Mega Plaza"
                text="Sucursal 3"
                image={image}
              />
            </div>
          </S.ListBranchOffice>
          <S.MapContainer>
            <BranchOfficeMapSelected
              stars={4}
              tittle="Sucursal Randmon"
              text={faker.lorem.words(50)}
            />
            <Map
              latitude={latitude}
              length={lenght}
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?v=3.exp" +
                credentials.mapsKey
              }
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<Spinner size="big" color="blue" />}
            />
          </S.MapContainer>
        </S.MapListContainer>
      </S.SearchListContainer>
    </S.Container>
  );
};

export default BranchOfficeMaps;
