import { useEffect } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import BranchOfficeImage from "components/organisms/BranchOfficeImage";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import BranchDetailTabMenu from "components/organisms/BranchDetailTabMenu";

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
        <div>
          <BranchOfficeImage
            onClickBack={backToList}
            stars={pageData.branch.stars}
            image={pageData.branch.bannerImage.url}
          />
          <S.BranchTitleContainer>
            <S.TitleContainer>
              <Title>{pageData.branch.name}</Title>
              <Description size="small">
                {`Creado el ${DateFormatting.applyFormat(
                  pageData.branch.createdAt.toDate()
                )}`}
              </Description>
            </S.TitleContainer>
            <S.ButtonContainer>
              <Button
                text="Eliminar Sucursal"
                onClick={deleteBranchOffice}
                styles={{ color: "red", size: "small" }}
              />
            </S.ButtonContainer>
          </S.BranchTitleContainer>
          <BranchDetailTabMenu tabs={GetPageTabs(CreateFood, RemoveFood)} />
        </div>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
