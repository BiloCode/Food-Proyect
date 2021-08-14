import { memo } from "react";
import classNames from "classnames";
import * as S from "./styles";

import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Description from "components/atoms/Description";

import StarListPuntuaction from "components/molecules/StarListPuntuaction";
import { PuntuactionType } from "@food/shared-types";

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
        <S.ClientData>
          <S.ClientNameAndDate>
            <Title size="small">{clientPuntuaction.client.fullName}</Title>
            <div>
              <Description color="blue" size="extra_small" bold="semi-bold">
                {clientPuntuaction.createdAt.toDate().toLocaleDateString()}
              </Description>
            </div>
          </S.ClientNameAndDate>
          <StarListPuntuaction
            iconColor="yellow"
            iconSize="small"
            stars={clientPuntuaction.stars}
          />
        </S.ClientData>
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
