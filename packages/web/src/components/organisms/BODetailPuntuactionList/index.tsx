import { FC, memo } from "react";
import * as S from "./styles";

import { Types } from "@food/shared";

import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";

type TProps = {
  cardList: Types.PuntuactionType[];
};

const BODetailPuntuactionList: FC<TProps> = ({ cardList }) => (
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
