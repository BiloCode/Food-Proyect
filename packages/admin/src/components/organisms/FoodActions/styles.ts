import styled from "styled-components";

import { ATOM_INPUT_HEIGHT } from "config/styles";

export const ActionsContainer = styled.div`
  width: 100%;
  height: ${ATOM_INPUT_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1em;
`;

export const SearchBarContainer = styled.div`
  width: 400px;
`;
