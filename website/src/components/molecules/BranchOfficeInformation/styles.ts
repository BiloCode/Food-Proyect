import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2em 2em;
  box-sizing: border-box;
  box-shadow: 2px 14px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  row-gap: 1em;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 2.8em;
  margin-bottom: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TittleContainer = styled.div`
  width: 100%;
  margin-bottom: 0.2em;
`;
