import firebase from "firebase";

import { ClientPuntuactionData } from "application/types/ClientModelType";

type UserParams = {
  puntuaction: ClientPuntuactionData;
  branchOfficeId: string;
};

class RemovePuntuactionInUser {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    clientRef: firebase.firestore.DocumentReference,
    params: UserParams
  ) => {
    const storedBranchOfficeIds = params.puntuaction.branchOfficeIds;
    const storedPuntuactions = params.puntuaction.store;

    const puntuaction: ClientPuntuactionData = {
      branchOfficeIds: [...storedBranchOfficeIds].filter(
        (_id) => _id !== params.branchOfficeId
      ),
      store: [...storedPuntuactions].filter(
        (v) => v.branchOfficeId !== params.branchOfficeId
      ),
    };

    transaction.update(clientRef, { puntuaction });

    return puntuaction;
  };
}

export default RemovePuntuactionInUser;
