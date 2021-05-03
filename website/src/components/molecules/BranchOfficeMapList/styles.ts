import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 5px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
