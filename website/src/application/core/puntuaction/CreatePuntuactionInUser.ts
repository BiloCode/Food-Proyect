import firebase from "firebase";

import {
  ClientPuntuactionData,
  ClientPuntuactionsType,
} from "application/types/ClientModelType";

type UserParams = {
  puntuactionStored: ClientPuntuactionData;
  newPuntuaction: ClientPuntuactionsType;
};

class CreatePuntuactionInUser {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    clientRef: firebase.firestore.DocumentReference,
    params: UserParams
  ) => {
    const puntuaction: ClientPuntuactionData = {
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
