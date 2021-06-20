import * as S from "./styles";

import FoodMenuCard from "components/molecules/FoodMenuCard";

import { useAtomValue } from "jotai/utils";
import { currentBranch } from "store/currentBranch";

const BranchMenu = () => {
  const pageData = useAtomValue(currentBranch);

  return (
    <S.MainContainer>
      <S.FoodList>
        {pageData.branch.menu.map((v) => (
          <FoodMenuCard
            key={v._id}
            title={v.title}
            description={v.description}
            onClickButton={() => null}
            images={v.foods.map((v) => v.image)}
            price={v.foods.reduce((prev, next) => prev + next.price, 0)}
          />
        ))}
      </S.FoodList>
    </S.MainContainer>
  );
};

export default BranchMenu;
