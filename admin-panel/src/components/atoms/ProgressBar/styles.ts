import { DARK_BLUE, NORMAL_GREEN } from "config/styles";
import styled from "styled-components";

export const MainContainer = styled.div`
  height: 12px;
  background-color: ${DARK_BLUE};
  border-radius: 6px;
`;

type NestedBoxProps = {
  hSize: number;
};

export const NestedBox = styled.div<NestedBoxProps>`
  width: ${({ hSize }) => `${hSize}%`};
  height: 100%;
  border-radius: inherit;
  background-color: ${NORMAL_GREEN};
  line-height: 0;
  transition: 0.3s;
`;
