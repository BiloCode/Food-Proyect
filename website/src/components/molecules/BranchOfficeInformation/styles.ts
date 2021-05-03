import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.8em 1.5em;
  box-sizing: border-box;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  row-gap: 1.25em;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 2.5em;
  margin-bottom: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TittleContainer = styled.div`
  width: 100%;
  margin-bottom: 0.2em;
`;
