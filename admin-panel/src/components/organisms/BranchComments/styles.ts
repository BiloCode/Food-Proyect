import { BLACK_LIGHT_B, PADDDING_BRANCH_DETAIL_TABS } from "config/styles";

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
  grid-template-rows: min-content;
  row-gap: 0.5em;
`;

export const NoCommentsContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px dashed ${BLACK_LIGHT_B};
`;

export const DefaultCommentContainer = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1em;
`;

export const TextContainer = styled.div`
  width: 220px;
  display: grid;
  row-gap: 1em;
  text-align: center;
`;
