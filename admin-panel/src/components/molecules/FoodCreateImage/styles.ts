import { BACKGROUND_LIGHT, BLACK_LIGHT_B, FONT } from "config/styles";
import styled from "styled-components";

export const FileLabel = styled.label`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;

  &.empty_image {
    display: flex;
    background-color: ${BACKGROUND_LIGHT};
  }
`;

export const InputHide = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  position: relative;

  &:hover ${FileLabel} {
    display: flex;
  }

  & > img {
    filter: brightness(90%);
  }
`;

export const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 8px;
`;

export const Message = styled.div`
  color: #fff;
  font-family: ${FONT};
  font-size: 14px;
  font-weight: bold;

  &.empty_image {
    color: ${BLACK_LIGHT_B};
  }
`;
