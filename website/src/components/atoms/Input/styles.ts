import { colors } from "config/colors";
import styled from "styled-components";

export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 1em;
  font-size: 1em;
  box-sizing: border-box;
  font-family: var(--font);
  background-color: ${colors.super_light_black};
`;
