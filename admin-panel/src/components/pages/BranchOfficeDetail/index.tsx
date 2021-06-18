import { RouteComponentProps } from "@reach/router";

import BranchOfficeImage from "components/organisms/BranchOfficeImage";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import BranchDetailTabMenu from "components/organisms/BranchDetailTabMenu";
import BranchOfficeDetailHeader from "components/molecules/BranchOfficeDetailHeader";

import GetPageTabs from "application/utils/GetPageTabs";
import DateFormatting from "application/utils/DateFormatting";
import MenuModalCreate from "components/templates/MenuModalCreate";

import useBranchDetailInit from "hooks/useBranchDetailInit";
import useBranchDetailActions from "hooks/useBranchDetailActions";
import StarsPromedy from "application/utils/StarsPromedy";

const BranchOfficeDetail = (_: RouteComponentProps) => {
  const { pageData } = useBranchDetailInit();
  const {
    CreateFood,
    RemoveFood,
    DisabledBranch,
    menuModalActive,
    menuModalToggle,
  } = useBranchDetailActions();

  return (
    <PageWithSidebarBox>
      {pageData.branch && (
        <>
          <BranchOfficeImage
            image={pageData.branch.bannerImage.url}
            stars={StarsPromedy.exec(pageData.branch.puntuactions)}
          />
          <BranchDetailTabMenu
            tabs={GetPageTabs(CreateFood, RemoveFood)}
            topRender={() => (
              <BranchOfficeDetailHeader
                title={pageData.branch.name}
                onClickButton={DisabledBranch}
                subtitle={`Creado el ${DateFormatting.applyFormat(
                  pageData.branch.createdAt.toDate()
                )}`}
              />
            )}
          />
          {menuModalActive && <MenuModalCreate onClose={menuModalToggle} />}
        </>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
