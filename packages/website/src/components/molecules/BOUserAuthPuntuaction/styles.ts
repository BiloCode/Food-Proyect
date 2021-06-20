import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 10px;
  padding: 2em;
  box-sizing: border-box;
  background-color: ${colors.light_gray};
  border-radius: 10px;
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
