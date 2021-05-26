import { useState } from "react";
import * as S from "./styles";

import BranchMenu from "components/templates/BranchMenu";
import BranchInformation from "components/templates/BranchInformation";
import BranchComments from "components/templates/BranchComments";

const tabPages = ["Detalles", "Comentarios", "Menu"];

const BranchDetailTabMenu = () => {
  const [pageSelect, setPageSelect] = useState<number>(0);

  const componentSelector = (index: number) => {
    let component = null;

    switch (index) {
      case 0:
        component = <BranchInformation />;
        break;
      case 1:
        component = <BranchComments />;
        break;
      case 2:
        component = <BranchMenu />;
        break;
    }

    return component;
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
