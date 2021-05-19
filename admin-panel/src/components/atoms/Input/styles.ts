import styled from "styled-components";

import { BACKGROUND_LIGHT, FONT } from "config/styles";

export const CustomInput = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 1em;
  font-size: 1em;
  box-sizing: border-box;
  font-family: ${FONT};
  background-color: ${BACKGROUND_LIGHT};
`;
