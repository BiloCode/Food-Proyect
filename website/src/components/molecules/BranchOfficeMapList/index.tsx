import * as S from "./styles";

import { useMapContext } from "context/MapContext/context";

import TestImage from "assets/images/BranchOfficeBembos.jpg";
import BranchOfficeMapItem from "../BranchOfficeMapItem";

const testArr = new Array(10).fill("");

const BranchOfficeMapList = () => {
  const { setMapCoords } = useMapContext();

  const onClick = () => {
    setMapCoords({
      latitude: -12.008734979054598,
      length: -76.82457079149549,
      tittle: "Sucursal Huaycan",
      text: "Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm",
      stars: 2,
    });
  };

  return (
    <S.Container>
      {testArr.map((_, i) => (
        <BranchOfficeMapItem
          key={i}
          tittle="Sucursal Huaycan"
          text="Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm"
          image={TestImage}
          onClick={onClick}
        />
      ))}
    </S.Container>
  );
};

export default BranchOfficeMapList;
