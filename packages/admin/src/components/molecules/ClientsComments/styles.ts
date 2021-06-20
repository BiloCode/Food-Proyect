import styled from "styled-components";

import { NORMAL_BLUE } from "config/styles";

export const Container = styled.div`
  display: grid;
  row-gap: 1em;
  padding: 2em;
  border-radius: 5px;
  transition-property: background-color;
  transition-duration: 0.05s;
  transition-timing-function: linear;
  border: 2px solid rgb(240, 240, 240);

  &:not(&.active) {
    cursor: pointer;
  }

  &:not(&.active):hover {
    background-color: rgb(250, 250, 250);
  }

  &.active {
    border-left: 6px solid ${NORMAL_BLUE};
  }
`;

export const ClienDataContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  column-gap: 1.3em;
`;

export const ClientData = styled.div`
  display: grid;
  row-gap: 4px;
`;

export const ImageClient = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  align-items: center;
  overflow: hidden;

  & img {
    height: auto;
    border-radius: 0;
  }
`;

export const ClientNameAndDate = styled.div`
  display: flex;
  justify-content: space-between;
`;
