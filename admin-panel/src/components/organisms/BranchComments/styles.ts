import {
  NORMAL_GRAY_LIGHT_B,
  PADDDING_BRANCH_DETAIL_TABS,
} from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  column-gap: 3em;
  padding: ${PADDDING_BRANCH_DETAIL_TABS};
  box-sizing: border-box;

  &.noComments {
    grid-template-columns: 1fr;
  }
`;

export const CommentsContainer = styled.div`
  display: grid;
  grid-template-rows: min-content;
  row-gap: 0.5em;
`;

export const NoComments = styled.div`
  background-color: ${NORMAL_GRAY_LIGHT_B};
  display: grid;
  justify-items: center;
  row-gap: 1em;
  grid-template-rows: repeat(2, min-content);
  border-radius: 10px;
  padding: 2em;
`;
