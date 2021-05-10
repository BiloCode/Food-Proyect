import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";

type ReturnHomeButtonProps = {
  onClick(): void;
};

const ReturnHomeButton = ({ onClick }: ReturnHomeButtonProps) => {
  return (
    <S.ReturnMenuContainer>
      <S.ReturnMenu onClick={onClick}>
        <S.IconContainer>
          <Icon color="white" size="small-medium" Type={IoIosArrowBack} />
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

export default ReturnHomeButton;
