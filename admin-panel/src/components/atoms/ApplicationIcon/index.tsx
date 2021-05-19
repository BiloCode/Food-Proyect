import classnames from "classnames";

import MonoEnterpriseLogo from "assets/images/Logo_Mono.svg";
import ColorEnterpriseLogo from "assets/images/Logo_Color.png";

import * as S from "./styles";

type IconSize = "small" | "big";
type ComponentProps = {
  multiChromatic?: boolean;
  size?: IconSize;
};

const ApplicationIcon = ({ multiChromatic, size }: ComponentProps) => (
  <S.ImageElement
    alt="application-logo"
    src={multiChromatic ? ColorEnterpriseLogo : MonoEnterpriseLogo}
    className={classnames({ small: size === "small", big: size === "big" })}
  />
);

export default ApplicationIcon;
