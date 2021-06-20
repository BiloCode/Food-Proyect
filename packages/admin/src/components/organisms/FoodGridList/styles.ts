import styled from "styled-components";

export const FoodListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
`;
