import styled from "styled-components";

import { BLACK_LIGHT, BLACK_LIGHT_B, FONT } from "config/styles";

export const DescriptiveMessage = styled.span`
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 600;
  color: ${BLACK_LIGHT};

  &.normal {
    font-size: 13px;
    font-weight: 300;
    color: ${BLACK_LIGHT_B};
  }
`;

export const ContainerMessages = styled.div`
  display: grid;
  row-gap: 5px;
`;

const ButtonHeight = "220px";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, ${ButtonHeight});
  column-gap: 5px;

  &.is_empty {
    grid-template-columns: ${ButtonHeight};
  }
`;
