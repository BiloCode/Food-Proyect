import { colors } from "config/colors";
import styled from "styled-components";

export const LabelWithIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 6px;
  align-items: flex-end;
  padding: 0 4px;
  box-sizing: border-box;
`;

export const TextareaContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 1em;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${colors.super_light_black};
`;

export const MainContainer = styled.div`
  display: grid;
  row-gap: 8px;

  &.small {
    ${LabelWithIcon}> * {
      font-size: 0.9em;
    }

    ${TextareaContainer} {
      height: 70px;
      border-radius: 6px;

      & > textarea {
        font-size: 0.9em;
      }
    }
  }
`;
