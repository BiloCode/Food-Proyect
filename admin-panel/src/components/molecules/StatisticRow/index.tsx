import * as S from "./styles";

import RoundedText from "components/atoms/RoundedText";

type StatisticsRowProps = {
  text: string;
  amount: number;
};

const StatisticRow = ({ text, amount }: StatisticsRowProps) => {
  const getAmountText = (amount: number) => {
    const digitMax = 4;
    const amountStr = String(amount);
    const repeat = digitMax - amountStr.length;

    let zeros = "";

    for (let i = 0; i < repeat; i++) {
      zeros += "0";
    }

    return zeros + amount;
  };

  return (
    <S.MainContainer>
      <S.TextContainer>
        <S.BarDecorator></S.BarDecorator>
        <S.TextElement>{text}</S.TextElement>
      </S.TextContainer>
      <S.AmountContainer>
        <S.AmountElement>
          <RoundedText bgColor="green">{getAmountText(amount)}</RoundedText>
        </S.AmountElement>
      </S.AmountContainer>
    </S.MainContainer>
  );
};

export default StatisticRow;
