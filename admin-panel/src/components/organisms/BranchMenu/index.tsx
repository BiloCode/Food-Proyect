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
            title={v.food.name}
            image={v.food.image}
            price={v.food.price}
            description={v.description}
          />
        ))}
      </S.FoodList>
    </S.MainContainer>
  );
};

export default BranchMenu;
