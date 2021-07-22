import { memo } from "react";
import * as S from "./styles";

import { StarsPromedy } from "@food-proyect/shared-functions";
import { BranchOfficeModelType } from "@food-proyect/shared-types";

import BranchOfficeCard from "components/organisms/BranchOfficeCard";

const BranchList = ({ list }: { list: BranchOfficeModelType[] }) => (
  <S.BranchOfficeList>
    {list.map((v) => (
      <BranchOfficeCard
        key={v._id}
        id={v._id}
        name={v.name}
        image={v.bannerImage.url}
        description={v.description}
        commentsNumber={v.puntuactions.length}
        stars={StarsPromedy.exec(v.puntuactions)}
      />
    ))}
  </S.BranchOfficeList>
);

export default memo(BranchList);
