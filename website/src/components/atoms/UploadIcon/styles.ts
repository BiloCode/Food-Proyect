import styled from "styled-components";

import { colors } from "config/colors";

export const LabelContainer = styled.label`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: ${colors.dark_blue};
`;

export const IconContainer = styled.span`
  color: #fff;
  line-height: 0;
  font-size: 1.5em;
`;

export const InputCustom = styled.input`
  display: none;
`;
