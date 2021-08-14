import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.nav`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 8px;
`;

export const TopContainer = styled.div`
  height: 96px;
  background-color: #fff;
`;

export const OptionList = styled.li`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 2.5em;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.a`
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 800;
  font-family: var(--font);
  text-decoration: none;
`;

// Auth

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 1em;
  cursor: pointer;
`;

export const UserText = styled.div`
  display: grid;
  justify-items: end;
`;

// No Auth

export const BottomContainer = styled.div`
  height: 48px;
  background-color: ${colors.blue};
`;
