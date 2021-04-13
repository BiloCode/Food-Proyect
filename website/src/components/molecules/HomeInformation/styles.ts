import styled from "styled-components";

export const HomeInformation = styled.div`
  display: grid;

  row-gap: 20px;

  &.center {
    text-align: center;
    align-items: center;
  }

  &.right {
    text-align: right;
    justify-items: right;
  }
`;

export const HomeInformationTittle = styled.div`
  width: 70%;
`;
