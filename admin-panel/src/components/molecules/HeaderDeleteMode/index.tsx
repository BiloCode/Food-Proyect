import * as S from "./styles";

import Button from "components/atoms/Button";
import { memo } from "react";
import classNames from "classnames";

type HeaderProps = {
  elementsSelected: number;
  onCancel(): void;
  onSuccess(): void;
};

const HeaderDeleteMode = ({
  onCancel,
  onSuccess,
  elementsSelected,
}: HeaderProps) => (
  <>
    <S.ContainerMessages>
      <S.DescriptiveMessage>
        Eliga los elementos que desea eliminar
      </S.DescriptiveMessage>
      <S.DescriptiveMessage className="normal">
        {elementsSelected} elementos seleccionados.
      </S.DescriptiveMessage>
    </S.ContainerMessages>
    <S.ButtonContainer
      className={classNames({ is_empty: elementsSelected === 0 })}
    >
      {elementsSelected > 0 && (
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
