import { FC } from "react";
import * as S from "./styles";

import { IoIosStarOutline, IoIosStar } from "react-icons/io";

import { Icon } from "@food-proyect/shared-components";

type StarsProps = {
  clientStars: number;
  onClickStar(starNumber);
};

const fakeList = new Array(5).fill("");

const StarsInteractive: FC<StarsProps> = ({ onClickStar, clientStars }) => (
  <S.MainContainer>
    <S.CenterContent>
      <div>
        {fakeList.map((_, i) => (
          <S.StarIconContainer key={i} onClick={onClickStar(i + 1)}>
            <Icon
              size="medium"
              color="yellow"
              type={i < clientStars ? IoIosStar : IoIosStarOutline}
            />
          </S.StarIconContainer>
        ))}
      </div>
      <S.MessageIndicator>
        Tu puntuacion es {clientStars}/{fakeList.length}
      </S.MessageIndicator>
    </S.CenterContent>
  </S.MainContainer>
);

export default StarsInteractive;
