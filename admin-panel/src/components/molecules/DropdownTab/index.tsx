import { useEffect, useState } from "react";
import * as S from "./styles";

import { IoChevronDown } from "react-icons/io5";
import { DropdownItem } from "application/types/PageTabs";

import Icon from "components/atoms/Icon";
import BranchOfficeTabOption, {
  TabProps,
} from "components/atoms/BranchOfficeTabOption";

type DropdownProps = TabProps & {
  options: DropdownItem[];
};

const DropdownTab = ({
  onClick,
  isPageActive,
  text,
  options,
}: DropdownProps) => {
  const [active, setActive] = useState<boolean>(false);

  const TabClick = () => {
    if (isPageActive) {
      setActive((active) => !active);
    }

    onClick();
  };

  useEffect(() => {
    if (!isPageActive) setActive(() => false);
  }, [isPageActive]);

  return (
    <BranchOfficeTabOption
      onClick={TabClick}
      text={text}
      isPageActive={isPageActive}
    >
      <div>
        <Icon type={IoChevronDown} />
      </div>
      {active && isPageActive && (
        <S.DropDownContainer>
          {options.map((v) => (
            <S.DropDownOption onClick={v.onClick}>
              <Icon type={v.icon} size="medium" />
              <div>{v.text}</div>
            </S.DropDownOption>
          ))}
        </S.DropDownContainer>
      )}
    </BranchOfficeTabOption>
  );
};

export default DropdownTab;
