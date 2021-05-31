import { ChangeEvent, memo } from "react";
import classNames from "classnames";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";

import { BsImageFill } from "react-icons/bs";

type ImageProps = {
  foodImage?: string;
  onChange(ev: ChangeEvent<HTMLInputElement>): void;
};

const FoodCreateImage = ({ foodImage, onChange }: ImageProps) => {
  return (
    <S.ImageContainer>
      <Image imageCover src={foodImage} />
      <S.FileLabel
        htmlFor="file-custom"
        className={classNames({ empty_image: !foodImage })}
      >
        <S.MessageContainer>
          <Icon
            type={BsImageFill}
            size="small"
            color={foodImage ? "white" : "gray"}
          />
          <S.Message className={classNames({ empty_image: !foodImage })}>
            {!foodImage ? "Subir una imagen" : "Remplazar Imagen"}
          </S.Message>
        </S.MessageContainer>
        <S.InputHide
          required
          type="file"
          id="file-custom"
          onChange={onChange}
        />
      </S.FileLabel>
    </S.ImageContainer>
  );
};

export default memo(FoodCreateImage);
