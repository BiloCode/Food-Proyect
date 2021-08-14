import firebase from "firebase";

import { Types } from "@food/shared";
import { NewPuntuactionType } from "application/types/NewPuntuactionType";

type BranchParams = {
  uPuntuactionsId: string[];
  puntuactions: Types.PuntuactionType[];
  newPuntuaction: NewPuntuactionType;
};

class CreatePuntuactionInBranch {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    branchRef: firebase.firestore.DocumentReference,
    params: BranchParams
  ) => {
    const { puntuactions, newPuntuaction, uPuntuactionsId } = params;

    const existsPuntuaction = uPuntuactionsId.includes(newPuntuaction.userId);

    let newUPuntIds = [];
    let newPuntuactions = [];

    if (existsPuntuaction) {
      newUPuntIds = uPuntuactionsId;
      newPuntuactions = puntuactions.map((p) => {
        if (p.userId === newPuntuaction.userId) {
          return {
            ...newPuntuaction,
            edited: true,
          };
        }

        return p;
      });
    } else {
      newUPuntIds = [...uPuntuactionsId, newPuntuaction.userId];
      newPuntuactions = [
        ...puntuactions,
        {
          ...newPuntuaction,
          edited: false,
        },
      ];
    }

    const saveInDoc = {
      userPuntuactionsId: newUPuntIds,
      puntuactions: newPuntuactions,
    };

    transaction.update(branchRef, saveInDoc);

    return saveInDoc;
  };
}

export default CreatePuntuactionInBranch;
