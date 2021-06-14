import { PADDDING_BRANCH_DETAIL_TABS } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  column-gap: 3em;
  padding: ${PADDDING_BRANCH_DETAIL_TABS};
  box-sizing: border-box;
`;

export const CommentsContainer = styled.div`
  display: grid;
  row-gap: 0.5em;
`;
