import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import Button from "components/atoms/Button";
import ClientsComments from "components/molecules/ClientsComments";
import ClientsCommentsDetail from "components/molecules/ClientsCommentsDetail";

import { useAtomValue } from "jotai/utils";
import { currentBranch } from "store/currentBranch";
import { PuntuactionType } from "@food-proyect/shared-types";
import { FaCommentSlash } from "react-icons/fa";

const BranchComments = () => {
  const branchData = useAtomValue(currentBranch);

  const [currentComment, setCurrentComment] = useState<PuntuactionType>();

  const [commentSelected, setCommentSelected] = useState<number>(0);

  useEffect(() => {
    setCurrentComment(branchData.branch.puntuactions[0]);
  }, [branchData]);

  const changeComment = (comment: number) => {
    setCommentSelected(comment);
  };

  const onClickComment = useCallback(
    (puntuaction: PuntuactionType, commentIndex: number) => () => {
      setCurrentComment(puntuaction);
      changeComment(commentIndex);
    },
    []
  );

  return (
    <S.Container>
      <S.CommentsContainer>
        {branchData.branch.puntuactions.length === 0 ? (
          <S.NoCommentsContainer>
            <S.DefaultCommentContainer>
              <Icon type={FaCommentSlash} size="extra-big" color="default" />
              <S.TextContainer>
                <Description size="small">
                  Nadie a comentado aun esta sucursal
                </Description>
                <Button
                  text="Ir a comentar"
                  styles={{ size: "small", color: "blue" }}
                />
              </S.TextContainer>
            </S.DefaultCommentContainer>
          </S.NoCommentsContainer>
        ) : (
          branchData.branch.puntuactions.map((v, i) => (
            <ClientsComments
              key={i}
              clientPuntuaction={v}
              onClickComment={onClickComment(v, i)}
              active={i === commentSelected}
            />
          ))
        )}
      </S.CommentsContainer>
      <ClientsCommentsDetail comment={currentComment} />
    </S.Container>
  );
};

export default BranchComments;
