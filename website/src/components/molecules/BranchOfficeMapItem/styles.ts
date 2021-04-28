import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 0 1em;
  display: grid;
  grid-template-columns: 60px 1fr 30px;
  align-items: center;
  justify-items: center;
  column-gap: 1em;
  cursor: pointer;
  background-color: ${colors.super_light_gray};
  box-sizing: border-box;
  border-radius: 10px;

  &:hover {
    background-color: ${colors.light_gray};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 100%;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
