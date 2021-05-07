import faker from "faker";
import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

type BranchOfficeMapListProps = {
  branchOfficeName: string;
};

const BranchOfficeMapList = ({
  branchOfficeName,
}: BranchOfficeMapListProps) => {
  const fakeMap = new Array(10).fill("");

  const context = useBranchOfficeContext();

  let branchOfficeFilter = [];

  context.branchOffices.map((v) => {
    let name = v.name.toLowerCase();
    if (name.includes(branchOfficeName)) {
      branchOfficeFilter.push(v);
    }
  });

  console.log(branchOfficeFilter);
  console.log(branchOfficeFilter);

  return (
    <S.Container>
      {branchOfficeFilter.map((v, i) => {
        return (
          <BranchOfficeMapItem
            key={i}
            tittle={v.name}
            text={"Descripcion de prueba"}
            image={v.bannerImage.url}
            latitude={v.location.latitude}
            length={v.location.longitude}
            stars={3}
          />
        );
      })}
    </S.Container>
  );
};

export default BranchOfficeMapList;
