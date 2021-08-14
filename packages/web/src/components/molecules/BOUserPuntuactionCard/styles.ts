import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${colors.super_light_gray};
  padding: 1.5em;
  box-sizing: border-box;
  display: grid;
  row-gap: 8px;
  border-radius: 10px;
`;

export const UserInfoDivider = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  column-gap: 1em;
`;

export const ContainerUserText = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 5px;
`;

export const Username = styled.span`
  font-family: var(--extra-font);
  font-weight: 700;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Date = styled.span`
  font-family: var(--font);
  color: ${colors.dark_blue};
  font-weight: bold;
`;
