import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 3em;
`;

export const UserAreaContainer = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1.5em;
`;

export const UserAreaTextContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 0.5em;
`;

export const UserAreaDateContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 6px;
  align-items: flex-end;
`;

export const UserAreaDateText = styled.div`
  font-family: var(--font);
  font-weight: 400;
  color: ${colors.dark_blue};
`;
