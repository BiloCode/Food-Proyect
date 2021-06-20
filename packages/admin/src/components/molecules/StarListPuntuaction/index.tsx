import { IconType } from "react-icons/lib";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import * as S from "./styles";

import Icon, { IconSizeType, IconColorType } from "components/atoms/Icon";

import useStarIconFormat from "hooks/useStarIconFormat";

type StarListPuntuactionProps = {
  stars: number;
  iconSize?: IconSizeType;
  iconColor?: IconColorType;
};

const StarListPuntuaction = ({
  stars,
  iconSize,
  iconColor,
}: StarListPuntuactionProps) => {
  const starList = useStarIconFormat(stars);

  return (
    <S.Container>
      {starList().map((v, i) => {
        let iconType: IconType;

        if (v === "fill") iconType = IoIosStar;
        else if (v === "empty") iconType = IoIosStarOutline;

        return (
          <Icon key={i} color={iconColor} type={iconType} size={iconSize} />
        );
      })}
    </S.Container>
  );
};

StarListPuntuaction.defaultProps = {
  iconSize: "small",
  iconColor: "yellow",
};

export default StarListPuntuaction;
