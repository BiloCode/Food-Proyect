import { FC, memo } from "react";
import * as S from "./styles";

import { PuntuactionType } from "application/types/BranchOfficeModelType";

import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";

type PuntuactionListProps = {
  cardList: PuntuactionType[];
};

const BODetailPuntuactionList: FC<PuntuactionListProps> = ({ cardList }) => (
  <S.PuntuactionList>
    {cardList.map((v) => (
      <BOUserPuntuactionCard key={v._id} />
    ))}
  </S.PuntuactionList>
);

export default memo(BODetailPuntuactionList);
