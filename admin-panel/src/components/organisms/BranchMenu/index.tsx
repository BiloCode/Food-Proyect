import * as S from "./styles";

import FoodMenuCard from "components/molecules/FoodMenuCard";

const BranchMenu = () => (
  <S.MainContainer>
    <S.FoodList>
      <FoodMenuCard />
      <FoodMenuCard />
      <FoodMenuCard />
      <FoodMenuCard />
      <FoodMenuCard />
      <FoodMenuCard />
    </S.FoodList>
  </S.MainContainer>
);

export default BranchMenu;
