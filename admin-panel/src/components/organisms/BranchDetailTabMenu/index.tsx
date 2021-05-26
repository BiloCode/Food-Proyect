import { useState } from "react";
import * as S from "./styles";

import BranchMenu from "components/templates/BranchMenu";
import BranchInformation from "components/templates/BranchInformation";
import BranchComments from "components/templates/BranchComments";

const tabPages = ["Detalles", "Comentarios", "Menu"];

const BranchDetailTabMenu = () => {
  const [pageSelect, setPageSelect] = useState<number>(0);

  const componentSelector = (index: number) => {
    const component = {
      0: <BranchInformation />,
      1: <BranchComments />,
      2: <BranchMenu />,
    };

    return component[index];
  };

  const changePage = (index: number) => () => {
    setPageSelect(() => index);
  };

  return (
    <div>
      <S.TabOptionContainer>
        {tabPages.map((v, i) => (
          <button key={i} onClick={changePage(i)}>
            {v}
          </button>
        ))}
      </S.TabOptionContainer>
      <div>{componentSelector(pageSelect)}</div>
    </div>
  );
};

export default BranchDetailTabMenu;
