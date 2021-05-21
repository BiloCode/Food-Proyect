import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

type HeaderTitleProps = {
  title: string;
  button?: {
    text: string;
    onClick(): void;
  };
};

const HeaderTitle = ({ title, button }: HeaderTitleProps) => (
  <S.TitleContainer>
    <Title>{title}</Title>
    {button && (
      <S.ButtonContainer>
        <Button
          text={button.text}
          onClick={button.onClick}
          styles={{ size: "small", color: "green" }}
        />
      </S.ButtonContainer>
    )}
  </S.TitleContainer>
);

export default HeaderTitle;
