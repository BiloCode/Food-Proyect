import { FC } from "react";
import * as S from "./styles";

import { IoIosStarOutline, IoIosStar } from "react-icons/io";

import Icon from "components/atoms/Icon";
import { StarsType } from "application/types/StarsType";

const fakeList = new Array(5).fill("");

type StarsProps = {
  starsSelected: StarsType;
  onClickStar(starNumber);
};

const StarPuntuactionInteractive: FC<StarsProps> = ({
  onClickStar,
  starsSelected,
}) => (
  <S.MainContainer>
    <S.CenterContent>
      <div>
        {fakeList.map((_, i) => (
          <S.StarIconContainer onClick={onClickStar(i + 1)}>
            <Icon
              key={i}
              size="medium"
              color="yellow"
              Type={i < starsSelected ? IoIosStar : IoIosStarOutline}
            />
          </S.StarIconContainer>
        ))}
      </div>
      <S.MessageIndicator>
        Tu puntuacion es {starsSelected}/{fakeList.length}
      </S.MessageIndicator>
    </S.CenterContent>
  </S.MainContainer>
);

export default StarPuntuactionInteractive;
