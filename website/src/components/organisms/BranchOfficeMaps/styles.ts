import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: calc(100vh - 90px);
  display: grid;
  grid-template-rows: 175px calc(100% - 175px);
  padding-bottom: 50px;
  align-items: center;
  box-sizing: border-box;
`;

export const SearchContainer = styled.div`
  width: 380px;
`;

export const MapContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 385px;
  column-gap: 2em;
  row-gap: 2em;
`;

export const GoogleMap = styled.div`
  grid-row: 1 / 3;
  grid-column-start: 2;
`;
