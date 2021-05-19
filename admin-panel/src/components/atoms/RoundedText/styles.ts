import { FONT, NORMAL_BLUE } from "config/styles";
import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  background-color: ${NORMAL_BLUE};
  border-radius: 1em;
  padding: 0.2em 0.8em;
  box-sizing: border-box;
  font-size: 0.9em;
  font-weight: bold;
  font-family: ${FONT};
  text-align: center;
  color: #fff;
`;
