import { memo } from "react";
import { useNavigate } from "@reach/router";
import * as S from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { Icon } from "@food-proyect/shared-components";
import Description from "components/atoms/Description";

const ReturnHomeButton = () => {
  const navigate = useNavigate();
  const onClickHome = () => navigate("/home");

  return (
    <S.ReturnMenuContainer>
      <S.ReturnMenu onClick={onClickHome}>
        <S.IconContainer>
          <Icon color="white" size="small-medium" type={IoIosArrowBack} />
        </S.IconContainer>
        <div>
          <Description color="black" size="medium">
            Regresar al menú principal
          </Description>
        </div>
      </S.ReturnMenu>
    </S.ReturnMenuContainer>
  );
};

export default memo(ReturnHomeButton);
