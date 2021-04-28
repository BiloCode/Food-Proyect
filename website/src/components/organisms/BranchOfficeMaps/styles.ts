import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 80%;
  row-gap: 50px;
  justify-items: center;
  border: 1px solid;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const SearchContainer = styled.div`
  width: 90%;
`;

export const SearchInput = styled.div`
  width: 390px;
`;

export const SearchListContainer = styled.div`
  width: 90%;
`;

export const TittleContainer = styled.div`
  padding: 1em 0;
`;

export const MapListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 390px 1fr;
  grid-template-rows: 1fr;
  column-gap: 2em;
`;

export const ListBranchOffice = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 5px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
`;
