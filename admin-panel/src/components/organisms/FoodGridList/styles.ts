import styled from "styled-components";

export const FoodListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 340px));
  column-gap: 1em;
`;
