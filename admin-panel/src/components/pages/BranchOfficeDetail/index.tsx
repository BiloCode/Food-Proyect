import { useEffect } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import * as S from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import StarListPuntuaction from "components/molecules/StarListPuntuaction";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { branchOfficeStore } from "store/branchOfficeStore";
import { currentBranchStore } from "store/currentBranchStore";

const BranchOfficeDetail = ({ navigate }: RouteComponentProps) => {
  const { id } = useParams();

  const branchList = useAtomValue(branchOfficeStore);
  const pageData = useAtomValue(currentBranchStore);
  const setPageData = useUpdateAtom(currentBranchStore);

  const backToList = () => navigate("/branch/list");

  useEffect(() => {
    if (branchList.requestState !== "complete") return;

    const branch = [...branchList.data].find((v) => v._id === id);

    setPageData({ branch });

    return () => {
      setPageData({});
    };
  }, [branchList]);

  return (
    <PageWithSidebarBox>
      {pageData.branch && (
        <div>
          <S.ImageContainer>
            <Image src={pageData.branch.bannerImage.url} imageCover />
            <S.FloatingContainer>
              <S.BackIcon onClick={backToList}>
                <Icon type={AiOutlineLeft} color="white" size="medium" />
              </S.BackIcon>
              <StarListPuntuaction
                iconColor="white"
                iconSize="medium"
                stars={pageData.branch.stars}
              />
            </S.FloatingContainer>
          </S.ImageContainer>
          <S.BranchTitleContainer>
            <Title>{pageData.branch.name}</Title>
          </S.BranchTitleContainer>
        </div>
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOfficeDetail;
