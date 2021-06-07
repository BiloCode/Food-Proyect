import styled from "styled-components";

import {
  ATOM_INPUT_HEIGHT,
  BACKGROUND_LIGHT,
  FONT,
  NORMAL_GRAY_MEDIUM,
} from "config/styles";

export const CustomInput = styled.input`
  width: 100%;
  height: ${ATOM_INPUT_HEIGHT};
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 1em;
  font-size: 1em;
  box-sizing: border-box;
  font-family: ${FONT};
  background-color: ${BACKGROUND_LIGHT};

  ::placeholder {
    color: ${NORMAL_GRAY_MEDIUM};
    font-weight: 0.5;
  }
`;
