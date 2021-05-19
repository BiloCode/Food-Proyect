import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 4em;
  box-sizing: border-box;
`;

export const CollectionList = styled.div`
  width: 100%;
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  column-gap: 10px;
`;
