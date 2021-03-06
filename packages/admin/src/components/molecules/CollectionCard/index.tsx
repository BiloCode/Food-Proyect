import { IconType } from "react-icons/lib";
import classNames from "classnames";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Spinner from "components/atoms/Spinner";

type CollectionColorType = "yellow" | "red";
type CollectionCardProps = {
  onClick(): void;
  icon: IconType;
  isLoading: boolean;
  collectionName: string;
  color?: CollectionColorType;
};

const CollectionCard = ({
  icon,
  color,
  isLoading,
  collectionName,
  onClick,
}: CollectionCardProps) => (
  <S.MainContainer
    onClick={onClick}
    className={classNames({ red: color === "red", yellow: color === "yellow" })}
  >
    {isLoading && (
      <S.SpinnerContainer>
        <Spinner color="white" size="small" />
      </S.SpinnerContainer>
    )}
    <S.IconContainer>
      <Icon color="white" size="big" type={icon} />
    </S.IconContainer>
    <S.TextElement>{collectionName}</S.TextElement>
  </S.MainContainer>
);

export default CollectionCard;
