import { BLACK_LIGHT_B } from "config/styles";
import styled from "styled-components";

export const FileLabel = styled.label`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  border: 2px dashed #fff;
  box-sizing: border-box;

  &.empty_image {
    display: flex;
    border: 2px dashed ${BLACK_LIGHT_B};

    &:hover {
      background-color: rgb(250, 250, 250);
    }
  }
`;

export const InputHide = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  position: relative;

  &:hover ${FileLabel} {
    display: flex;
  }

  & > img {
    filter: brightness(90%);
  }
`;
