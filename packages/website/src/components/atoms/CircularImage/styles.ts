import styled from "styled-components";

import { PROFILE_IMAGE_SIZE_BIG } from "config/constans";

export const MainContainer = styled.div`
  --size: 56px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: rgb(235, 235, 235);

  &.big {
    --size: 80px;
  }

  &.small {
    --size: 32px;
  }

  &.extra_big {
    --size: ${PROFILE_IMAGE_SIZE_BIG}px;
  }

  &.hoverable > img {
    cursor: pointer;
    &:hover {
      filter: brightness(70%);
    }
  }
`;
