import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";

type HeaderTitleProps = {
  title: string;
  subtitleMessage?: string;
  button?: {
    text: string;
    onClick(): void;
  };
};

const HeaderTitle = ({ title, button, subtitleMessage }: HeaderTitleProps) => (
  <S.TitleContainer>
    <S.TitleWithMessage>
      <Title>{title}</Title>
      {subtitleMessage && (
        <Description color="gray" size="small">
          {subtitleMessage}
        </Description>
      )}
    </S.TitleWithMessage>
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
