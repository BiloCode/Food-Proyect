import styled from "styled-components";

import { NORMAL_GRAY_MEDIUM } from "config/styles";

const paddingContainer = 1.5;

export const Container = styled.div`
  height: min-content;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: ${paddingContainer * 2}em;
  padding: ${paddingContainer}em 2.5em;
  position: relative;
  border: 1px solid ${NORMAL_GRAY_MEDIUM};
  border-radius: 20px;
  overflow: hidden;
`;

export const Tittle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 1px;
    background-color: ${NORMAL_GRAY_MEDIUM};

    bottom: calc(${-paddingContainer}em - 2px);
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  row-gap: ${paddingContainer}em;
`;

export const InformationContent = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const Information = styled.div`
  display: grid;
  row-gap: 0.2em;
  grid-template-rows: repeat(2, min-content);
`;
