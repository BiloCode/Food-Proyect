import classNames from "classnames";
import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";
import NoSearchResults from "../NoSearchResults";

import { Types, Utils } from "@food/shared";

type BranchOfficeMapListProps = {
  branchOffices: Types.BranchOffice[];
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
        branchOffices.map((v, i) => (
          <BranchOfficeMapItem
            key={i}
            name={v.name}
            description={v.description}
            image={v.bannerImage.url}
            latitude={v.location.latitude}
            length={v.location.longitude}
            stars={Utils.getStarsAverage(v.puntuactions)}
          />
        ))
      )}
    </S.Container>
  );
};

export default BranchOfficeMapList;
