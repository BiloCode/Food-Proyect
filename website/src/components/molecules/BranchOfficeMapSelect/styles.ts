import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 2em;
  display: grid;
  grid-template-columns: 1fr 200px;
  align-items: center;
  justify-items: center;
  column-gap: 1em;
  cursor: pointer;
  background-color: ${colors.super_light_gray};
  box-sizing: border-box;

  &:hover {
    background-color: ${colors.light_gray};
  }
`;

export const TextContainer = styled.div`
  width: inherit;
  height: 3.7em;
  margin-bottom: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
`;

export const StarsContainer = styled.div`
  align-self: flex-end;
`;
