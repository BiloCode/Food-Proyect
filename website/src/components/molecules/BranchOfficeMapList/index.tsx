import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import NoSearchResults from "../NoSearchResults";
import classNames from "classnames";

const BranchOfficeMapList = () => {
  const context = useBranchOfficeContext();

  return (
    <S.Container
      className={classNames({
        noResults: context.branchOfficeFilter.length === 0,
      })}
    >
      {context.branchOfficeFilter.length === 0 ? (
        <NoSearchResults />
      ) : (
        context.branchOfficeFilter.map((v, i) => {
          return (
            <BranchOfficeMapItem
              key={i}
              tittle={v.name}
              text={"Descripcion de prueba"}
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
