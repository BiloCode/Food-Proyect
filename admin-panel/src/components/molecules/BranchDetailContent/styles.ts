import { NORMAL_GRAY_MEDIUM_B } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${NORMAL_GRAY_MEDIUM_B};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const buttonSize = "132px";
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: ${buttonSize};
  column-gap: 1em;

  &.double_button {
    grid-template-columns: repeat(2, ${buttonSize});
  }
`;
