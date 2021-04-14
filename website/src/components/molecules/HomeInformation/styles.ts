import styled from "styled-components";

export const HomeInformation = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 */
  display: grid;

  row-gap: 20px;

  &.center {
    text-align: center;
    align-items: center;
  }

  &.right {
    text-align: right;
    justify-items: right;
    /* align-items: flex-end; */
  }
`;

export const HomeInformationTittle = styled.div`
  width: 70%;
`;
