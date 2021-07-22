import { FC } from "react";
import { useNavigate } from "@reach/router";
import classnames from "classnames";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { StarListPuntuaction } from "@food-proyect/shared-components";

import { ClientPuntuactionsType } from "@food-proyect/shared-types";

const ProfilePuntuactionCard: FC<ClientPuntuactionsType> = ({
  stars,
  description,
  createdAt,
  branchOfficeId,
  branchOfficeName,
}) => {
  const navigate = useNavigate();

  const onClickBranchOfficeName = () => {
    navigate(`/branch-office/${branchOfficeId}`);
  };

  return (
    <S.MainContainer
      className={classnames({ description_empty: description?.length === 0 })}
    >
      <S.HeadContent>
        <S.TitleText onClick={onClickBranchOfficeName}>
          {branchOfficeName}
        </S.TitleText>
        <S.DateText>
          {Intl.DateTimeFormat().format(createdAt.toDate())}
        </S.DateText>
      </S.HeadContent>
      {description && <Description size="small">{description}</Description>}
      <StarListPuntuaction stars={stars} />
    </S.MainContainer>
  );
};

export default ProfilePuntuactionCard;
