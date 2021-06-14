import { BLACK_LIGHT_C, BLACK_LIGHT_D, NORMAL_GRAY_LIGHT } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 1em;
  padding: 2em 3em;
  background-color: ${NORMAL_GRAY_LIGHT};
  border-radius: 10px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.05s;
  transition-timing-function: linear;

  &:hover {
    background-color: ${BLACK_LIGHT_D};
  }

  &.active {
    background-color: ${BLACK_LIGHT_C};
  }
`;

export const ClienDataContainer = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  grid-template-rows: 65px;
  align-items: center;
  column-gap: 1em;
`;

export const ImageClient = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
