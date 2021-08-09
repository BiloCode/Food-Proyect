import * as S from "./styles";

import { BranchOfficeModelType } from "@food-proyect/shared-types";
import { StarsPromedy } from "@food-proyect/shared-functions";
import { BranchOfficeCard } from "@food-proyect/shared-components";
import { useNavigate } from "@reach/router";

type BranchOfficeContentProps = {
  branchOfficeFilter: BranchOfficeModelType[];
};

const BranchOfficeContent = ({
  branchOfficeFilter,
}: BranchOfficeContentProps) => {
  const navigate = useNavigate();

  const navToBranchDetail = (id: string) => () =>
    navigate("/branch-office/" + id);

  return (
    <S.MainContainer>
      <S.Container>
        {branchOfficeFilter.map((v, i) => (
          <BranchOfficeCard
            name={v.name}
            image={v.bannerImage.url}
            onClickButton={navToBranchDetail(v._id)}
            description={v.description}
            commentsNumber={v.puntuactions.length}
            stars={StarsPromedy.exec(v.puntuactions)}
          />
        ))}
      </S.Container>
    </S.MainContainer>
  );
};

export default BranchOfficeContent;
