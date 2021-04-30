import { IconType } from "react-icons/lib";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import * as S from "./styles";

import Icon from "components/atoms/Icon";

import useStarIconFormat from "hooks/useStarIconFormat";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;
type StarListPuntuactionProps = {
  stars: StarsType;
};

const StarListPuntuaction = ({ stars }: StarListPuntuactionProps) => {
  const starList = useStarIconFormat(stars);

  return (
    <S.Container>
      {starList().map((v, i) => {
        let iconType: IconType;

        if (v === "fill") iconType = IoIosStar;
        else if (v === "empty") iconType = IoIosStarOutline;

        return <Icon key={i} color="yellow" Type={iconType} size="small" />;
      })}
    </S.Container>
  );
};

export default StarListPuntuaction;
