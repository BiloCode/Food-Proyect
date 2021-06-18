import styled from "styled-components";

import { FONT, NORMAL_GRAY_MEDIUM_B } from "config/styles";

export const Container = styled.div`
  display: grid;
  row-gap: 1em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${NORMAL_GRAY_MEDIUM_B};
`;

export const Head = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSize = "132px";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: ${ButtonSize};
  column-gap: 1em;

  &.double_button {
    grid-template-columns: repeat(2, ${ButtonSize});
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 21px;
  border: none;
  font-family: ${FONT};
  font-size: 0.95em;
  padding: 0;
  outline: none;
`;
