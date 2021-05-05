import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2em;
`;

type PagesButtonProps = {
  gridCount: number;
};

export const PagesButtonContainer = styled.div<PagesButtonProps>`
  display: grid;
  grid-template-columns: repeat(${({ gridCount }) => gridCount}, max-content);
  column-gap: 5px;
`;
