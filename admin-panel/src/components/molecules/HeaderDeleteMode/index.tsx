import * as S from "./styles";

import Button from "components/atoms/Button";
import { memo } from "react";
import classNames from "classnames";

type HeaderProps = {
  foodSelectNumber: number;
  onCancel(): void;
  onSuccess(): void;
};

const HeaderDeleteMode = ({
  onCancel,
  onSuccess,
  foodSelectNumber,
}: HeaderProps) => (
  <>
    <S.ContainerMessages>
      <S.DescriptiveMessage>
        Eliga las comidas que desea eliminar
      </S.DescriptiveMessage>
      <S.DescriptiveMessage className="normal">
        {foodSelectNumber} comidas seleccionadas.
      </S.DescriptiveMessage>
    </S.ContainerMessages>
    <S.ButtonContainer
      className={classNames({ is_empty: foodSelectNumber === 0 })}
    >
      {foodSelectNumber > 0 && (
        <Button
          onClick={onSuccess}
          text="Eliminar la seleccion"
          styles={{ size: "small", color: "yellow" }}
        />
      )}
      <Button
        text="Cancelar"
        onClick={onCancel}
        styles={{ size: "small", color: "red" }}
      />
    </S.ButtonContainer>
  </>
);

export default memo(HeaderDeleteMode);
