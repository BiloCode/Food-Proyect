import styled from "styled-components";

import { Colors, Font } from "../../../config";

export const ParagraphContent = styled.p`
  --size: 16px;

  font-weight: 500;
  font-size: var(--size);
  color: ${Colors.BLACK};
  line-height: calc(var(--size) * 1.4);
  font-family: ${Font};

  &.big {
    --size: 18px;
  }

  &.small {
    --size: 14px;
  }
`;
