import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 340px;
`;

export const DescriptionContainer = styled.div`
  width: 480px;
`;

export const MainContainer = styled.div`
  display: grid;
  row-gap: 20px;

  &.center {
    text-align: center;
    justify-items: center;

    ${TitleContainer} {
      width: 70%;
    }

    ${DescriptionContainer} {
      width: 85%;
    }
  }

  &.right {
    text-align: right;
    justify-items: right;
  }
`;
