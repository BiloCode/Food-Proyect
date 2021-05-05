import { FC } from "react";
import classnames from "classnames";
import * as S from "./styles";

type CircleNumberProps = {
  value: string | number;
  isSelect?: boolean;
  onClick?(): void;
};

const CircleNumber: FC<CircleNumberProps> = ({ value, isSelect, onClick }) => (
  <S.CircleContainer
    onClick={onClick}
    className={classnames({ select: isSelect })}
  >
    {value}
  </S.CircleContainer>
);

export default CircleNumber;
