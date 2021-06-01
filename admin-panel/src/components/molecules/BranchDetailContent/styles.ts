import { NORMAL_GRAY_MEDIUM_B } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content;
  row-gap: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${NORMAL_GRAY_MEDIUM_B};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 132px 132px;
  grid-template-rows: min-content;
  column-gap: 1em;
`;

export const EditButton = styled.div`
  grid-column: 2 / 3;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: none;

  &.active {
    display: block;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: none;

  &.active {
    display: block;
  }
`;
