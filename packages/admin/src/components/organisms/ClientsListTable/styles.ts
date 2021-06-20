import styled from "styled-components";

import { CLIENTS_LIST_TABLE_ROWS } from "config/constants";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(${CLIENTS_LIST_TABLE_ROWS + 1}, 1fr);
  row-gap: 0.5em;
`;
