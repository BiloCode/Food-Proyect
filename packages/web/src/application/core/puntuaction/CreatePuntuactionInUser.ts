import firebase from "firebase";

import { Types } from "@food/shared";

type UserParams = {
  puntuactionStored: Types.ClientPuntuactionData;
  newPuntuaction: Types.ClientClientPuntuactions;
};

class CreatePuntuactionInUser {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    clientRef: firebase.firestore.DocumentReference,
    params: UserParams
  ) => {
    const puntuaction: Types.ClientPuntuactionData = {
      branchOfficeIds: [],
      store: [],
    };

    const uPuntuaction = params.puntuactionStored;
    const uPuntuactionStore = [...uPuntuaction.store];
    const uBranchIds = [...uPuntuaction.branchOfficeIds];

    const existsPuntuaction = uBranchIds.includes(
      params.newPuntuaction.branchOfficeId
    );

    if (existsPuntuaction) {
      puntuaction.branchOfficeIds = [...uPuntuaction.branchOfficeIds];
      puntuaction.store = uPuntuactionStore.map((v) => {
        if (v.branchOfficeId === params.newPuntuaction.branchOfficeId) {
          return params.newPuntuaction;
        }

        return v;
      });
    } else {
      puntuaction.store = [...uPuntuactionStore, params.newPuntuaction];
      puntuaction.branchOfficeIds = [
        ...uBranchIds,
        params.newPuntuaction.branchOfficeId,
      ];
    }

    transaction.update(clientRef, { puntuaction });

    return puntuaction;
  };
}

export default CreatePuntuactionInUser;
