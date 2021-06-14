import * as S from "./styles";

import Description from "components/atoms/Description";
import Button from "components/atoms/Button";
import { PuntuactionType } from "application/types/BranchOfficeModelType";

type ClientsCommentsDetail = {
  comment: PuntuactionType;
};

const ClientsCommentsDetail = ({ comment }: ClientsCommentsDetail) => {
  const TypePuntuaction = (puntuaction: number) => {
    switch (puntuaction) {
      case 1:
        return "Negativa";
      case 2:
        return "Negativa / Neutral";
      case 3:
        return "Neutral";
      case 4:
        return "Positiva / Neutral";
      case 5:
        return "Positiva";
      default:
        return "Sin puntuacion";
    }
  };

  return (
    <S.Container>
      <S.Tittle>
        <Description color="blue" size="medium" bold="bold">
          Informacion Adicional
        </Description>
      </S.Tittle>
      <S.InformationContainer>
        <S.Information>
          <Description size="medium" color="gray" bold="bold" uppercase>
            Estado
          </Description>
          <Description size="medium" color="gray">
            {comment?.edited ? "Sin Editar" : "Editado"}
          </Description>
        </S.Information>
        <S.Information>
          <Description size="medium" color="gray" bold="bold" uppercase>
            Puntuacion
          </Description>
          <Description size="medium" color="gray">
            {TypePuntuaction(comment?.stars)}
          </Description>
        </S.Information>
        <Button
          text="Eliminar comentario"
          type="button"
          styles={{ color: "yellow", size: "medium" }}
        />
      </S.InformationContainer>
    </S.Container>
  );
};

export default ClientsCommentsDetail;
