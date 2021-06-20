import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  border-radius: 10px;
  background-color: ${colors.light_gray};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 10px 10px 0 0;
`;

export const TextContainer = styled.div`
  padding: 1em 1.5em;
  box-sizing: border-box;
  display: grid;
  row-gap: 1em;
  text-align: center;
`;

export const Money = styled.span`
  font-weight: 800;
  color: ${colors.dark_blue};
  font-family: var(--extra-font);
  font-size: 1.1em;
`;

export const DescriptionContainer = styled.div`
  height: 60px;
  overflow: hidden;
`;
