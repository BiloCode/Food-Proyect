import {
  BLACK_SUPER_LIGHT,
  FONT,
  NORMAL_BLUE,
  NORMAL_GRAY,
  NORMAL_GRAY_LIGHT,
} from "config/styles";
import styled from "styled-components";

type ContentTableProps = {
  bold: "bold" | "semi-bold";
  color: "gray" | "black-light";
};

export const ContentTable = styled.span<ContentTableProps>`
  margin: 0;
  font-size: 1.1em;
  font-family: ${FONT};
  color: ${({ color }) => (color === "gray" ? NORMAL_GRAY : BLACK_SUPER_LIGHT)};
  font-weight: ${({ bold }) => (bold === "bold" ? "bold" : "550")};
  font-size: 0.95em;
`;

export const ImageTable = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 6px 1fr;
  column-gap: 5px;
`;

export const CellBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_BLUE};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_GRAY_LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;

  & img {
    height: 100%;
  }
`;

export const NameTable = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_GRAY_LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const EmailTable = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_GRAY_LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateTable = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_GRAY_LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PuntuactionTable = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NORMAL_GRAY_LIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonTable = styled.div`
  width: 75%;
  justify-self: flex-end;
  align-items: center;
`;
