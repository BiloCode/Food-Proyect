import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const ButtonContainer = styled.div`
  width: 120px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * > {
    flex: none;
  }
`;
