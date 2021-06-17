import * as S from "./styles";

import ClientsComments from "components/molecules/ClientsComments";
import ClientsCommentsDetail from "components/molecules/ClientsCommentsDetail";

import { useAtomValue } from "jotai/utils";
import { currentBranch } from "store/currentBranch";
import { useEffect, useState } from "react";
import { PuntuactionType } from "application/types/BranchOfficeModelType";

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

  return (
    <S.Container>
      <S.CommentsContainer>
        {branchData.branch.puntuactions.map((v, i) => (
          <ClientsComments
            key={i}
            clientPuntuaction={v}
            onClickComment={() => {
              setCurrentComment(v);
              changeComment(i);
            }}
            active={i === commentSelected}
          />
        ))}
      </S.CommentsContainer>
      <ClientsCommentsDetail comment={currentComment} />
    </S.Container>
  );
};

export default BranchComments;
