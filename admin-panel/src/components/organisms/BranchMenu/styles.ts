import { PADDDING_BRANCH_DETAIL_TABS } from "config/styles";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: ${PADDDING_BRANCH_DETAIL_TABS};
  box-sizing: border-box;
`;

export const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 10px;
`;
