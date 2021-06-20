import { FC, memo } from "react";
import * as S from "./styles";

import { PuntuactionType } from "@food-proyect/shared-types";

import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";

type PuntuactionListProps = {
  cardList: PuntuactionType[];
};

const BODetailPuntuactionList: FC<PuntuactionListProps> = ({ cardList }) => (
  <S.PuntuactionList>
    {cardList.map((v) => (
      <BOUserPuntuactionCard
        key={v.userId}
        stars={v.stars}
        userId={v.userId}
        createdAt={v.createdAt}
        description={v.description}
        userName={v.client.fullName}
        userImage={v.client.profileImage}
      />
    ))}
  </S.PuntuactionList>
);

export default memo(BODetailPuntuactionList);
