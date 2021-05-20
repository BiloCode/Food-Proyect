import { memo } from "react";
import { IconType } from "react-icons";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Spinner from "components/atoms/Spinner";
import RoundedText, { RoundedTextProps } from "components/atoms/RoundedText";

type SidebarOptionProps = {
  text: string;
  icon: IconType;
  onClick?(): void;
  items?: RoundedTextProps & {
    loading: boolean;
    numberOfItems: number;
  };
};

const SidebarOption = ({ icon, text, items, onClick }: SidebarOptionProps) => (
  <S.MainContainer onClick={onClick}>
    <S.TextContainer>
      <Icon type={icon} color="white" size="medium" />
      <S.Text>{text}</S.Text>
    </S.TextContainer>
    <S.ItemStateContainer>
      {items &&
        (items.loading ? (
          <Spinner size="small" />
        ) : (
          <RoundedText bgColor={items.bgColor}>
            {items.numberOfItems > 99 ? "+99" : items.numberOfItems}
          </RoundedText>
        ))}
    </S.ItemStateContainer>
  </S.MainContainer>
);

export default memo(SidebarOption);
