import styled from "styled-components";

import { PROFILE_IMAGE_SIZE_BIG } from "config/constans";

export const ImageContainer = styled.div`
  width: max-content;
  position: relative;
`;

export const ImageBorder = styled.div`
  width: ${PROFILE_IMAGE_SIZE_BIG + 15}px;
  height: ${PROFILE_IMAGE_SIZE_BIG + 15}px;
  border-radius: 50%;
  border: 4px solid rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadIconContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
