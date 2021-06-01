import { BLACK_LIGHT_C, BACKGROUND_LIGHT } from "config/styles";
import styled from "styled-components";

export const TabOptionContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${BACKGROUND_LIGHT};
  height: 60px;

  &::before {
    content: "";
    z-index: 50;
    width: 3fr;
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: 0;
    background-color: ${BLACK_LIGHT_C};
  }
`;
