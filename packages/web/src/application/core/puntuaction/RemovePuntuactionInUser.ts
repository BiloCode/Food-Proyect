import firebase from "firebase";

import { Types } from "@food/shared";

type UserParams = {
  branchOfficeId: string;
  puntuaction: Types.ClientPuntuactionData;
};

class RemovePuntuactionInUser {
  public static exec = (
    transaction: firebase.firestore.Transaction,
    clientRef: firebase.firestore.DocumentReference,
    params: UserParams
  ) => {
    const storedBranchOfficeIds = params.puntuaction.branchOfficeIds;
    const storedPuntuactions = params.puntuaction.store;

    const puntuaction: Types.ClientPuntuactionData = {
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
