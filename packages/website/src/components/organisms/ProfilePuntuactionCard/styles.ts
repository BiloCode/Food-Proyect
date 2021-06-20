import { colors } from "config/colors";
import styled from "styled-components";

export const HeadContent = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  padding: 1.5em 2em;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${colors.light_gray};

  &:not(&.description_empty) {
    row-gap: 6px;
    grid-template-columns: 1fr;

    ${HeadContent} {
      justify-content: space-between;
    }
  }

  &.description_empty {
    align-items: center;

    ${HeadContent} {
      display: grid;
      row-gap: 6px;
    }
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const TitleText = styled.span`
  width: max-content;
  font-weight: bold;
  font-family: var(--font);
  color: ${colors.light_black};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DateText = styled.span`
  font-weight: 700;
  font-size: 0.9em;
  font-family: var(--font);
  color: ${colors.dark_blue};
`;
