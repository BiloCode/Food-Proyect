import * as S from "./styles";

import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Description from "components/atoms/Description";

import StarListPuntuaction from "components/molecules/StarListPuntuaction";
import { PuntuactionType } from "application/types/BranchOfficeModelType";
import classNames from "classnames";
import { memo } from "react";

type ClientsCommentsType = {
  clientPuntuaction: PuntuactionType;
  onClickComment(): void;
  active: boolean;
};

const ClientsComments = ({
  clientPuntuaction,
  onClickComment,
  active,
}: ClientsCommentsType) => {
  return (
    <S.Container
      onClick={onClickComment}
      className={classNames({
        active: active,
      })}
    >
      <S.ClienDataContainer>
        <S.ImageClient>
          <Image src={clientPuntuaction.client.profileImage} />
        </S.ImageClient>
        <div>
          <S.ClientNameAndDate>
            <Title size="small">{clientPuntuaction.client.fullName}</Title>
            <div>
              <Description color="blue" size="small" bold="semi-bold">
                {clientPuntuaction.createdAt.toDate().toLocaleDateString()}
              </Description>
            </div>
          </S.ClientNameAndDate>
          <div>
            <StarListPuntuaction
              iconColor="yellow"
              iconSize="small"
              stars={clientPuntuaction.stars}
            />
          </div>
        </div>
      </S.ClienDataContainer>
      <div>
        <Description
          size="small"
          color={!clientPuntuaction.description ? "gray" : "black"}
        >
          {clientPuntuaction.description || "Sin descripcion..."}
        </Description>
      </div>
    </S.Container>
  );
};

export default memo(ClientsComments);
