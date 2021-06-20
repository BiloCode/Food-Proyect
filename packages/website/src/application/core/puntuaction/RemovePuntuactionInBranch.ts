import firebase from "firebase";

import { PuntuactionType } from "@food-proyect/shared-types";

type BranchOfficeParams = {
  userId: string;
  puntuactions: PuntuactionType[];
  userPuntuactionsId: string[];
};

class RemovePuntuactionInBranch {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    branchRef: firebase.firestore.DocumentReference,
    data: BranchOfficeParams
  ) => {
    const puntuactions = data.puntuactions.filter(
      (punt) => punt.userId !== data.userId
    );

    const userPuntuactionsId = data.userPuntuactionsId.filter(
      (_id) => _id !== data.userId
    );

    transaction.update(branchRef, { puntuactions, userPuntuactionsId });

    return {
      puntuactions,
      userPuntuactionsId,
    };
  };
}

export default RemovePuntuactionInBranch;
