import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: 2.5em;
  box-sizing: border-box;
  display: grid;
  row-gap: 1.5em;
  background-color: ${colors.light_gray};
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const MoneyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
