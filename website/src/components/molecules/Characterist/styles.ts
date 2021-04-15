import { colors } from "config/colors";
import styled from "styled-components";

export const Characterist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacteristIcon = styled.div`
  width: 90px;
  height: 90px;
  font-size: 50px;
  color: #fff;
  background-color: ${colors.dark_blue};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
