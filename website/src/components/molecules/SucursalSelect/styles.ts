import { colors } from "config/colors";
import styled from "styled-components";

export const SucursalSelectContainer = styled.div`
  margin: 50px 0;
  display: flex;
  padding: 0 2em;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: max-content max-content;
  column-gap: 1em;
  width: 200px;
  height: 38px;
  background-color: ${colors.light_gray};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  font-family: var(--font);
  font-weight: 500;
  color: ${colors.gray};
`;

export const SucursalOptionsContainer = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${colors.light_gray};
  border-radius: 10px;
  overflow: hidden;
`;

export const SucursalOption = styled.li`
  height: 38px;
  width: 100%;
  padding: 0 2em;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    color: ${colors.light_black};
    background-color: ${colors.super_light_black};
  }
`;
