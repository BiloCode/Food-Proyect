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
      <S.IconContainer>
        {options.length !== 0 && isPageActive && (
          <Icon type={IoChevronDown} size="small-medium" color="blue" />
        )}
      </S.IconContainer>
      {active && isPageActive && (
        <S.DropDownContainer>
          {options.map((v, i) => (
            <S.DropDownOption onClick={v.onClick} key={i}>
              <Icon type={v.icon} size="medium" />
              <span>{v.text}</span>
            </S.DropDownOption>
          ))}
        </S.DropDownContainer>
      )}
    </BranchOfficeTabOption>
  );
};

export default DropdownTab;
