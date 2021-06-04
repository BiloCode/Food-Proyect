import { useEffect } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import * as S from "./styles";

import Title from "components/atoms/Title";
import BranchOfficeImage from "components/organisms/BranchOfficeImage";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import BranchDetailTabMenu from "components/organisms/BranchDetailTabMenu";

import GetPageTabs from "application/utils/GetPageTabs";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { branchOfficeStore } from "store/branchOfficeStore";
import { currentBranchStore } from "store/currentBranchStore";

const BranchOfficeDetail = ({ navigate }: RouteComponentProps) => {
  const { id } = useParams();

  const branchData = useAtomValue(branchOfficeStore);
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

  return (
    <PageWithSidebarBox>
      {pageData.branch && (
        <div>
          <BranchOfficeImage
            onClickBack={backToList}
            stars={pageData.branch.stars}
            image={pageData.branch.bannerImage.url}
          />
          <S.BranchTitleContainer>
            <Title>{pageData.branch.name}</Title>
          </S.BranchTitleContainer>
          <BranchDetailTabMenu tabs={GetPageTabs(CreateFood, RemoveFood)} />
        </div>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
