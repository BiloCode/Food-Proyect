import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
`;

export const CommentsListContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: flex-start;
  margin: 1em 0;
  row-gap: 0.5em;
`;

export const CommentsEmptyContent = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${colors.light_gray};
  border-radius: 20px;
  max-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
