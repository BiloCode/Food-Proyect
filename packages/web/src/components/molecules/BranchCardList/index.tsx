import * as S from "./styles";

import { Utils, Types } from "@food/shared";
import { BranchOfficeCard } from "@food/components";

import useNavigateRouter from "hooks/useNavigateRouter";

type TProps = {
  list: Types.BranchOffice[];
};

const BranchCardList = ({ list }: TProps) => {
  const { navigateToBranchDetail } = useNavigateRouter();

  return (
    <S.MainContainer>
      {list.map((v, i) => (
        <BranchOfficeCard
          name={v.name}
          image={v.bannerImage.url}
          description={v.description}
          commentsNumber={v.puntuactions.length}
          stars={Utils.getStarsAverage(v.puntuactions)}
          onClickButton={navigateToBranchDetail(v._id)}
        />
      ))}
    </S.MainContainer>
  );
};

export default BranchCardList;
