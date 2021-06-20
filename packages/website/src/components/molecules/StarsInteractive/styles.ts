import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CenterContent = styled.div`
  display: grid;
  row-gap: 6px;
  justify-items: center;
`;

export const StarIconContainer = styled.span`
  display: inline-block;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MessageIndicator = styled.span`
  font-family: var(--font);
  font-size: 0.9em;
  font-weight: 800;
`;
