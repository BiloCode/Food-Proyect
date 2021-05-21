import * as S from "./styles";

import RoundedText from "components/atoms/RoundedText";

type StatisticsRowProps = {
  text: string;
  amount: number;
};

const StatisticRow = ({ text, amount }: StatisticsRowProps) => (
  <S.MainContainer>
    <S.TextContainer>
      <S.BarDecorator></S.BarDecorator>
      <S.TextElement>{text}</S.TextElement>
    </S.TextContainer>
    <S.AmountContainer>
      <S.AmountElement>
        <RoundedText bgColor="green">{amount}</RoundedText>
      </S.AmountElement>
    </S.AmountContainer>
  </S.MainContainer>
);

export default StatisticRow;
