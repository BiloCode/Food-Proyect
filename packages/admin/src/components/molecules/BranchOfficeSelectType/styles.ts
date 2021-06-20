import { BLACK, BLACK_LIGHT_D, FONT, NORMAL_GRAY_LIGHT_B } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  font-family: ${FONT};
  color: ${BLACK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${NORMAL_GRAY_LIGHT_B};
  border-radius: 5px;
  font-size: 1em;
  padding: 0 2em;
  box-sizing: border-box;

  user-select: none;
`;

export const OptionsContainer = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${NORMAL_GRAY_LIGHT_B};
  border-radius: 5px;
  overflow: hidden;
`;

export const Option = styled.li`
  height: 38px;
  width: 100%;
  padding: 0 2em;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    background-color: ${BLACK_LIGHT_D};
  }
`;
