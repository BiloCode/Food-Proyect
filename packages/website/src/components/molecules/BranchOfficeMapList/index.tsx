import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";
import NoSearchResults from "../NoSearchResults";
import classNames from "classnames";
import { BranchOfficeModelType } from "@food-proyect/shared-types";
import { StarsPromedy } from "@food-proyect/shared-functions";

type BranchOfficeMapListProps = {
  branchOffices: BranchOfficeModelType[];
};

const BranchOfficeMapList = ({ branchOffices }: BranchOfficeMapListProps) => {
  /*   const context = useBranchOfficeContext(); */

  return (
    <S.Container
      className={classNames({
        noResults: branchOffices.length === 0,
      })}
    >
      {branchOffices.length === 0 ? (
        <NoSearchResults />
      ) : (
        branchOffices.map((v, i) => {
          return (
            <BranchOfficeMapItem
              key={i}
              name={v.name}
              description={v.description}
              image={v.bannerImage.url}
              latitude={v.location.latitude}
              length={v.location.longitude}
              stars={StarsPromedy.exec(v.puntuactions)}
            />
          );
        })
      )}
    </S.Container>
  );
};

export default BranchOfficeMapList;
