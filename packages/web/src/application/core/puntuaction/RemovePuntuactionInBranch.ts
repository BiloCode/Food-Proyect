import firebase from "firebase";

import { Types } from "@food/shared";

type BranchOfficeParams = {
  userId: string;
  puntuactions: Types.PuntuactionType[];
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
