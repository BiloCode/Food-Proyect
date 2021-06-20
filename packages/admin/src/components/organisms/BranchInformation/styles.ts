import { PADDDING_BRANCH_DETAIL_TABS } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 2em;
  grid-auto-rows: max-content;
  padding: ${PADDDING_BRANCH_DETAIL_TABS};
  box-sizing: border-box;
`;
