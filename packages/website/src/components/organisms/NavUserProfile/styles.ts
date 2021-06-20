import styled from "styled-components";

import { NAVBAR_HEIGHT } from "config/constans";

export const MainContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.button`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 1em;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const DropdownList = styled.ul`
  width: 200px;
  margin: 0;
  padding: 0;
  padding: 5px 0;
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  right: 0;
  top: ${NAVBAR_HEIGHT}px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
