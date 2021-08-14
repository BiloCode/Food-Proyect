import styled from "styled-components";

import { colors } from "config/colors";

export const Text = styled.div`
  display: grid;
  row-gap: 4px;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PriceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  column-gap: 8px;
`;

export const Price = styled.span`
  color: ${colors.blue};
  font-family: var(--font);
  font-size: 20px;
  font-weight: 900;
`;

export const PriceOld = styled(Price)`
  font-size: 14px;
  opacity: 0.6;
  text-decoration: line-through;
`;
