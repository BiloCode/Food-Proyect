import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

const CreateBranchForm = () => {
  return (
    <S.Container>
      <div>
        <Title size="small-medium">Informacion Basica</Title>
      </div>
      <div>
        <div>
          <Title size="small-medium">Informacion detallada</Title>
        </div>
        <div>
          <Title size="small-medium">Informacion geográfica</Title>
        </div>
        <S.ButtonsContainer>
          <Button
            styles={{ color: "blue", size: "normal" }}
            type="submit"
            text="Crear sucursal"
          />
          <Button
            styles={{ color: "yellow", size: "normal" }}
            type="button"
            text="Cancelar y cerrar"
          />
        </S.ButtonsContainer>
      </div>
    </S.Container>
  );
};

export default CreateBranchForm;
