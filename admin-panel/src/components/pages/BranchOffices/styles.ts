import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  margin: 2em auto;
`;

export const BranchOfficeListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BranchOfficeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 310px);
  gap: 1.5em;
  margin: 3em 0;
`;
