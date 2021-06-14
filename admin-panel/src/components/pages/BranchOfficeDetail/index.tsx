import { useEffect } from "react";
import { RouteComponentProps, useParams } from "@reach/router";

import BranchOfficeImage from "components/organisms/BranchOfficeImage";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import BranchDetailTabMenu from "components/organisms/BranchDetailTabMenu";
import BranchOfficeDetailHeader from "components/molecules/BranchOfficeDetailHeader";

import GetPageTabs from "application/utils/GetPageTabs";
import DateFormatting from "application/utils/DateFormatting";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { branchOffice } from "store/branchOffice";
import { currentBranch as currentBranchStore } from "store/currentBranch";

const BranchOfficeDetail = ({ navigate }: RouteComponentProps) => {
  const { id } = useParams();

  const branchData = useAtomValue(branchOffice);
  const pageData = useAtomValue(currentBranchStore);
  const setPageData = useUpdateAtom(currentBranchStore);

  const backToList = () => navigate("/branch/list");

  useEffect(() => {
    if (branchData.requestState !== "complete") return;

    const branch = [...branchData.data].find((v) => v._id === id);
    if (!branch) {
      navigate("/branch/list");
      return;
    }

    setPageData({ branch });

    return () => {
      setPageData({});
    };
  }, [branchData.requestState]);

  const CreateFood = () => {};
  const RemoveFood = () => {};

  const deleteBranchOffice = () => {};

  return (
    <PageWithSidebarBox>
      {pageData.branch && (
        <>
          <BranchOfficeImage
            onClickBack={backToList}
            stars={pageData.branch.stars}
            image={pageData.branch.bannerImage.url}
          />
          <BranchDetailTabMenu
            tabs={GetPageTabs(CreateFood, RemoveFood)}
            topRender={() => (
              <BranchOfficeDetailHeader
                title={pageData.branch.name}
                onClickButton={deleteBranchOffice}
                subtitle={`Creado el ${DateFormatting.applyFormat(
                  pageData.branch.createdAt.toDate()
                )}`}
              />
            )}
          />
        </>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
