import styled from "styled-components";

export const FoodListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 340px));
  column-gap: 1em;
`;

export const ContainerContent = styled.div`
  display: grid;
  margin: 1.5em 0;
  row-gap: 3em;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  width: 400px;
`;
