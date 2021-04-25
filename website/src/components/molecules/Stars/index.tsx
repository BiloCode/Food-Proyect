import useStarsRecibed from "hooks/useStarsRecibed";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type StarsProps = {
  stars: StarsType;
};

const Stars = ({ stars }: StarsProps) => {
  const GetStart = useStarsRecibed(stars);

  return <S.Container>{GetStart().map((v) => v)}</S.Container>;
};

export default Stars;
