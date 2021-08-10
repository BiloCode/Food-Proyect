import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 5em 0;
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  column-gap: 8em;
`;

export const LeftContent = styled.div`
  display: grid;
  row-gap: 3em;

  p {
    width: 80%;
  }

  button {
    width: 50%;
    min-width: 320px;
  }
`;
