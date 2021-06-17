import * as S from "./styles";

import Description from "components/atoms/Description";
import Button from "components/atoms/Button";
import { PuntuactionType } from "application/types/BranchOfficeModelType";
import useDeleteComment from "hooks/useDeleteComment";
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
    <>
      {comment?.userId && (
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
              onClick={DeleteComment}
            />
          </S.InformationContainer>
        </S.Container>
      )}
    </>
  );
};

export default ClientsCommentsDetail;
