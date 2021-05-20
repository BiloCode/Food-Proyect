import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";
import NoSearchResults from "../NoSearchResults";
import classNames from "classnames";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

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
              tittle={v.name}
              text={v.name}
              image={v.bannerImage.url}
              latitude={v.location.latitude}
              length={v.location.longitude}
              stars={v.stars}
            />
          );
        })
      )}
    </S.Container>
  );
};

export default BranchOfficeMapList;
