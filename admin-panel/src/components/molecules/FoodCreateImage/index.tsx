import { ChangeEvent, memo } from "react";
import classNames from "classnames";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";

import { RiImageAddLine } from "react-icons/ri";

type ImageProps = {
  foodImage?: string;
  changeEnabled: boolean;
  onChange(ev: ChangeEvent<HTMLInputElement>): void;
};

const FoodCreateImage = ({
  foodImage,
  onChange,
  changeEnabled,
}: ImageProps) => {
  return (
    <S.ImageContainer>
      {foodImage && <Image imageCover src={foodImage} />}
      {changeEnabled && (
        <S.FileLabel
          htmlFor="file-custom"
          className={classNames({ empty_image: !foodImage })}
        >
          <Icon
            size="big"
            type={RiImageAddLine}
            color={foodImage ? "white" : "default"}
          />
          <S.InputHide
            required
            type="file"
            id="file-custom"
            onChange={onChange}
          />
        </S.FileLabel>
      )}
    </S.ImageContainer>
  );
};

export default memo(FoodCreateImage);
