import { useState } from "react";
import * as S from "./styles";

import BranchMenu from "components/templates/BranchMenu";
import BranchInformation from "components/organisms/BranchInformation";
import { PageTab } from "application/types/PageTabs";

import BranchComments from "components/templates/BranchComments";
import BranchOfficeTabOption from "components/atoms/BranchOfficeTabOption";
import DropdownTab from "components/molecules/DropdownTab";

type TabProps = {
  tabs: PageTab[];
};

const BranchDetailTabMenu = ({ tabs }: TabProps) => {
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
    setPageSelect(index);
  };

  return (
    <div>
      <S.TabOptionContainer>
        {tabs.map((v, i) =>
          !v.options.length ? (
            <BranchOfficeTabOption
              text={v.title}
              isPageActive={i === pageSelect}
              onClick={changePage(i)}
            />
          ) : (
            <DropdownTab
              text={v.title}
              options={v.options}
              onClick={changePage(i)}
              isPageActive={i === pageSelect}
            />
          )
        )}
      </S.TabOptionContainer>
      <div>{componentSelector(pageSelect)}</div>
    </div>
  );
};

export default BranchDetailTabMenu;
