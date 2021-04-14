import styled from "styled-components";

export const Title = styled.p`
  font-family: var(--font);
  font-size: 35px;
  font-weight: bold;
  color: #000;
  margin: 0;
  text-transform: uppercase;

  &.white {
    color: #fff;
  }

  &.small {
    font-size: 18px;
  }

  &.medium {
    font-size: 24px;
  }
`;
