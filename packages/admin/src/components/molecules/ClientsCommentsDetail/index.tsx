import * as S from "./styles";

import { PuntuactionType } from "@food-proyect/shared-types";

import useDeleteComment from "hooks/useDeleteComment";

import Button from "components/atoms/Button";
import Description from "components/atoms/Description";

import { useAtomValue } from "jotai/utils";
import { currentBranch } from "store/currentBranch";

type ClientsCommentsDetailType = {
  comment: PuntuactionType;
};

const ClientsCommentsDetail = ({ comment }: ClientsCommentsDetailType) => {
  const branchData = useAtomValue(currentBranch);

  const { DeleteComment } = useDeleteComment({
    branchOfficeId: branchData.branch._id,
    userId: comment?.userId,
  });

  const getTextRender = (puntuaction: number) => {
    const textRender = {
      1: "Negativa",
      2: "Negativa / Neutral",
      3: "Neutral",
      4: "Positiva / Neutral",
      5: "Positiva",
    };

    return textRender[puntuaction] || "Sin puntuación";
  };

  const commentIsNull = !comment;

  return (
    <S.Container>
      <S.Tittle>
        <Description color="blue" size="small" bold="bold">
          Detalle de la Puntuación
        </Description>
      </S.Tittle>
      <S.InformationContainer>
        <S.Information>
          <Description size="small" color="gray" bold="bold" uppercase>
            Estado
          </Description>
          <Description size="small" color="gray">
            {commentIsNull
              ? "No seleccionado"
              : comment?.edited
              ? "Sin Editar"
              : "Editado"}
          </Description>
        </S.Information>
        <S.Information>
          <Description size="small" color="gray" bold="bold" uppercase>
            Puntuacion
          </Description>
          <Description size="small" color="gray">
            {getTextRender(comment?.stars)}
          </Description>
        </S.Information>
        <Button
          disabled={commentIsNull}
          text="Eliminar comentario"
          onClick={!commentIsNull && DeleteComment}
          styles={{ color: "yellow", size: "medium" }}
        />
      </S.InformationContainer>
    </S.Container>
  );
};

export default ClientsCommentsDetail;
