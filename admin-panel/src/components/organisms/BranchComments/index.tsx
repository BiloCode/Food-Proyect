import * as S from "./styles";

import ClientsComments from "components/molecules/ClientsComments";
import ClientsCommentsDetail from "components/molecules/ClientsCommentsDetail";
import Icon from "components/atoms/Icon";

import classNames from "classnames";
import { useAtomValue } from "jotai/utils";
import { currentBranch } from "store/currentBranch";
import { useCallback, useEffect, useState } from "react";
import { PuntuactionType } from "application/types/BranchOfficeModelType";
import { IoMdDocument } from "react-icons/io";
import Description from "components/atoms/Description";

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
    <S.Container
      className={classNames({
        noComments: branchData.branch.puntuactions.length === 0,
      })}
    >
      <S.CommentsContainer>
        {branchData.branch.puntuactions.length === 0 ? (
          <S.NoComments>
            <div>
              <Icon type={IoMdDocument} size="extra-big" color="gray" />
            </div>
            <div>
              <Description color="gray" size="medium" bold="bold" uppercase>
                Sin comentarios
              </Description>
            </div>
          </S.NoComments>
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
