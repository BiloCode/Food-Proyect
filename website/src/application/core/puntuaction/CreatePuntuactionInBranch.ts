import firebase from "firebase";

import { PuntuactionType } from "application/types/BranchOfficeModelType";
import { NewPuntuactionType } from "application/types/NewPuntuactionType";

type BranchParams = {
  branchStars: number;
  uPuntuactionsId: string[];
  puntuactions: PuntuactionType[];
  newPuntuaction: NewPuntuactionType;
};

class CreatePuntuactionInBranch {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    branchRef: firebase.firestore.DocumentReference,
    params: BranchParams
  ) => {
    const { puntuactions, newPuntuaction, uPuntuactionsId, branchStars } =
      params;

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
      stars: branchStars,
      userPuntuactionsId: newUPuntIds,
      puntuactions: newPuntuactions,
    };

    transaction.update(branchRef, saveInDoc);

    return saveInDoc;
  };
}

export default CreatePuntuactionInBranch;
