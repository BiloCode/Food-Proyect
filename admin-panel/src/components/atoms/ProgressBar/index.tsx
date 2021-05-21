import * as S from "./styles";

type ProgressBarProps = {
  percentage: number;
};

const ProgressBar = ({ percentage }: ProgressBarProps) => (
  <S.MainContainer>
    <S.NestedBox hSize={percentage} />
  </S.MainContainer>
);

export default ProgressBar;
