import { ChangeEvent, FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

type UploadIconProps = {
  icon: IconType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const UploadIcon: FC<UploadIconProps> = ({ icon: Icon, onChange }) => (
  <S.LabelContainer htmlFor="upload-image">
    <S.IconContainer>
      <Icon />
    </S.IconContainer>
    <S.InputCustom
      type="file"
      accept="image/*"
      id="upload-image"
      onChange={onChange}
      data-testid="file-input"
    />
  </S.LabelContainer>
);

export default UploadIcon;
