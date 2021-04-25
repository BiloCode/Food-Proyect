import useStarsRecibed from "hooks/useStarsRecibed";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type StarListPuntuactionProps = {
  stars: StarsType;
};

const StarListPuntuaction = ({ stars }: StarListPuntuactionProps) => {
  const GetStart = useStarsRecibed(stars);

  return <S.Container>{GetStart().map((v) => v)}</S.Container>;
};

export default StarListPuntuaction;
