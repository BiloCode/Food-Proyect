import styled from "styled-components";

import { BLACK_LIGHT_C, BACKGROUND_LIGHT } from "config/styles";

export const TabOptionContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${BACKGROUND_LIGHT};
  height: 60px;

  &::before {
    content: "";
    width: 3fr;
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: 0;
    background-color: ${BLACK_LIGHT_C};
  }
`;

type PageProps = {
  activeIndex: number;
};

export const MovablePage = styled.div<PageProps>`
  display: grid;
  grid-template-columns: repeat(3, 100%);
  transform: translateX(-${(props) => props.activeIndex * 100}%);
  transition: 0.2s;
`;

type LimiterProps = {
  isCurrent: boolean;
};

export const PageLimiter = styled.div<LimiterProps>`
  height: ${(props) => !props.isCurrent && "0"};
  overflow: ${(props) => !props.isCurrent && "hidden"};
`;
