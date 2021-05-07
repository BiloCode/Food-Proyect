import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  align-content: flex-start;

  row-gap: 5px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
