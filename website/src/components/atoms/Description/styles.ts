import styled from "styled-components";

export const Container = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: 400;
  font-family: var(--font);
  line-height: 1.4em;

  &.white {
    color: #fff;
  }

  &.light-black {
    color: #3d3d3d;
  }

  &.extra_small {
    font-size: 0.7em;
  }

  &.small {
    font-size: 0.95em;
  }

  &.medium {
    font-size: 1.1em;
  }

  &.large {
    font-size: 1.5em;
  }
`;
