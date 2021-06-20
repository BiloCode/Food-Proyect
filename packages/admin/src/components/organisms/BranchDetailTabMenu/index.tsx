import { useState, memo } from "react";
import * as S from "./styles";

import BranchMenu from "components/organisms/BranchMenu";
import BranchInformation from "components/organisms/BranchInformation";

import { PageTab } from "application/types/PageTabs";

import BranchComments from "components/organisms/BranchComments";
import BranchOfficeTabOption from "components/atoms/BranchOfficeTabOption";
import DropdownTab from "components/molecules/DropdownTab";

type TabProps = {
  tabs: PageTab[];
  topRender: () => JSX.Element;
};

const BranchDetailTabMenu = ({ tabs, topRender: TopComponent }: TabProps) => {
  const [pageSelect, setPageSelect] = useState<number>(0);

  const pages = [BranchInformation, BranchComments, BranchMenu];
  const changePage = (index: number) => () => {
    setPageSelect(index);
  };

  return (
    <div>
      <TopComponent />
      <S.TabOptionContainer>
        {tabs.map((v, i) =>
          !v.options.length ? (
            <BranchOfficeTabOption
              key={i}
              text={v.title}
              isPageActive={i === pageSelect}
              onClick={changePage(i)}
            />
          ) : (
            <DropdownTab
              key={i}
              text={v.title}
              options={v.options}
              onClick={changePage(i)}
              isPageActive={i === pageSelect}
            />
          )
        )}
      </S.TabOptionContainer>
      <S.MovablePage activeIndex={pageSelect}>
        {pages.map((Component, index) => (
          <S.PageLimiter isCurrent={pageSelect === index}>
            <Component />
          </S.PageLimiter>
        ))}
      </S.MovablePage>
    </div>
  );
};

export default BranchDetailTabMenu;
