import { FC } from "react";
import classnames from "classnames";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { useNavigate } from "@reach/router";

type ProfilePuntuactionProps = {
  description: string;
  branchOfficeId: string;
};

const ProfilePuntuactionCard: FC<ProfilePuntuactionProps> = ({
  description,
  branchOfficeId,
}) => {
  const navigate = useNavigate();

  const onClickBranchOfficeName = () => {
    navigate(`/branch-office/${branchOfficeId}`);
  };

  return (
    <S.MainContainer
      className={classnames({ description_empty: description.length === 0 })}
    >
      <S.HeadContent>
        <S.TitleText onClick={onClickBranchOfficeName}>
          Sucursal del norte - Mega Plaza
        </S.TitleText>
        <S.DateText>16/10/20</S.DateText>
      </S.HeadContent>
      {description && <Description size="small">{description}</Description>}
      <div>{/** Stars Molecule */}</div>
    </S.MainContainer>
  );
};

export default ProfilePuntuactionCard;
