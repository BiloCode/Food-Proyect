import * as S from "./styles";

import classNames from "classnames";
import { FC } from "react";

type BranchOfficeTabOptionProps = {
  onClick(): void;
  text: string;
  isSelected: boolean;
};

const BranchOfficeTabOption: FC<BranchOfficeTabOptionProps> = ({
  onClick,
  text,
  isSelected,
  children,
}) => {
  return (
    <S.Container
      onClick={onClick}
      className={classNames({
        active: isSelected,
      })}
    >
      {text}
      {children}
    </S.Container>
  );
};

export default BranchOfficeTabOption;
