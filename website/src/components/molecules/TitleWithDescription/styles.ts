import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  row-gap: 20px;

  &.center {
    text-align: center;
    justify-items: center;
  }

  &.right {
    text-align: right;
    justify-items: right;
  }
`;

export const TitleContainer = styled.div`
  width: 70%;
`;
