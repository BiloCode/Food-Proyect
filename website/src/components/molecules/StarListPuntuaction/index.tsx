import { IconType } from "react-icons/lib";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import * as S from "./styles";

import Icon, { IconSizeType } from "components/atoms/Icon";

import useStarIconFormat from "hooks/useStarIconFormat";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;
type StarListPuntuactionProps = {
  stars: StarsType;
  iconSize?: IconSizeType;
};

const StarListPuntuaction = ({ stars, iconSize }: StarListPuntuactionProps) => {
  const starList = useStarIconFormat(stars);

  return (
    <S.Container>
      {starList().map((v, i) => {
        let iconType: IconType;

        if (v === "fill") iconType = IoIosStar;
        else if (v === "empty") iconType = IoIosStarOutline;

        return <Icon key={i} color="yellow" Type={iconType} size={iconSize} />;
      })}
    </S.Container>
  );
};

StarListPuntuaction.defaultProps = {
  iconSize: "small",
};

export default StarListPuntuaction;
