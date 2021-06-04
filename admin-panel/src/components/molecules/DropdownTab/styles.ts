import styled from "styled-components";
import {
  BACKGROUND_LIGHT,
  BLACK_SUPER_LIGHT,
  NORMAL_WHITE,
} from "config/styles";

export const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 0.5em;
  display: flex;
  flex-direction: column;
  background-color: ${NORMAL_WHITE};
  font-size: 14px;
  color: ${BLACK_SUPER_LIGHT};
  cursor: pointer;
`;

export const DropDownOption = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-columns: 25px 1fr;
  column-gap: 1em;
  padding: 0 20px;
  box-sizing: border-box;

  &:hover {
    background-color: ${BACKGROUND_LIGHT};
  }
`;
