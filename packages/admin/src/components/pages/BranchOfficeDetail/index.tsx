import { RouteComponentProps } from "@reach/router";

import BranchOfficeImage from "components/organisms/BranchOfficeImage";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import BranchDetailTabMenu from "components/organisms/BranchDetailTabMenu";
import BranchOfficeDetailHeader from "components/molecules/BranchOfficeDetailHeader";

import GetPageTabs from "application/utils/GetPageTabs";
import MenuModalCreate from "components/templates/MenuModalCreate";

import { DateFormatting, StarsPromedy } from "@food/shared-functions";

import useBranchDetailInit from "hooks/useBranchDetailInit";
import useBranchDetailActions from "hooks/useBranchDetailActions";
import MenuDeleteModal from "components/templates/MenuDeleteModal";

const BranchOfficeDetail = (_: RouteComponentProps) => {
  const { pageData } = useBranchDetailInit();
  const {
    CreateFood,
    RemoveFood,
    DisabledBranch,
    menuModalActive,
    menuModalToggle,
    menuDeleteModal,
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
          {menuDeleteModal && <MenuDeleteModal />}
          {menuModalActive && <MenuModalCreate onClose={menuModalToggle} />}
        </>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
