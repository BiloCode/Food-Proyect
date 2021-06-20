import styled from "styled-components";

type FoodContainerProps = {
  columns: number;
  translateX: number;
};

const foodCardSize = "300px";

export const MainContainer = styled.div`
  width: calc(calc(${foodCardSize} * 3) + 3em);
  margin: 0 auto;
  overflow-x: hidden;
`;

export const FoodContainer = styled.div<FoodContainerProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${foodCardSize});
  column-gap: 1em;
  transform: translateX(-${({ translateX }) => translateX}%);
`;
