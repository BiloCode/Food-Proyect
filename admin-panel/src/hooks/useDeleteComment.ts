import RemovePuntuaction from "application/core/RemovePuntuaction";
import { RequestStateType } from "application/types/RequestStateType";
import { useAtom } from "jotai";

import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { currentBranch as currentBranchStore } from "store/currentBranch";
import Swal from "sweetalert2";
import useShowConfirm from "./useShowConfirm";

type useDeleteCommentProps = {
  branchOfficeId: string;
  userId: string;
};

const useDeleteComment = ({
  branchOfficeId,
  userId,
}: useDeleteCommentProps) => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const DeleteComment = async () => {
    const ConfirmDialog = useShowConfirm();

    const dialogResult = await ConfirmDialog({
      title: "Eliminar Comentario",
      description: "¿Desea realizar esta acción?",
      icon: "question",
    });

    if (!dialogResult) {
      return;
    }

    const removeCommentService = new RemovePuntuaction();

    Swal.fire({
      title: "Eliminando",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    const newCurrentBranchData = await removeCommentService.exec(
      branchOfficeId,
      userId
    );

    console.log(newCurrentBranchData);

    if (!newCurrentBranchData) {
      addToast("Error al eliminar ", { appearance: "error" });
      Swal.close();
      return;
    }

    const newCurrentBranch = { ...currentBranch };

    newCurrentBranch.branch.puntuactions =
      newCurrentBranchData.branchData.puntuactions;

    setCurrentBranch(newCurrentBranch);

    const currentBranchCommentsByCurrentUser =
      newCurrentBranchData.currentBranchOfficeClientComment.length;

    if (currentBranchCommentsByCurrentUser === 0) {
      Swal.fire({
        title: "Cuidado",
        text: "Este comentario ya había sido eliminado",
        icon: "info",
      });
      return;
    }

    Swal.fire({
      title: "Eliminado",
      text: "Accion finalizada",
      icon: "success",
    });
  };

  return { DeleteComment };
};

export default useDeleteComment;
