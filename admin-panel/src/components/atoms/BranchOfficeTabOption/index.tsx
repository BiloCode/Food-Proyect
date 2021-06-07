import { FC } from "react";
import * as S from "./styles";

import classNames from "classnames";

export type TabProps = {
  text: string;
  onClick(): void;
  isPageActive: boolean;
};

const BranchOfficeTabOption: FC<TabProps> = ({
  onClick,
  text,
  isPageActive,
  children,
}) => {
  return (
    <S.Container
      onClick={onClick}
      className={classNames({
        active: isPageActive,
      })}
    >
      {text}
      {children}
    </S.Container>
  );
};

export default BranchOfficeTabOption;
