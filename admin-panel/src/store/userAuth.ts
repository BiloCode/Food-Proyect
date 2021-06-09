import { atom } from "jotai";
import firebase from "firebase";

import { AdminModelType } from "application/types/AdminModelType";
import { RequestStateType } from "application/types/RequestStateType";
import { atomWithReset } from "jotai/utils";

type UserAtomType = {
  user: AdminModelType;
  requestState: RequestStateType;
};

export const userAuth = atomWithReset<UserAtomType>({
  user: null,
  requestState: "initialize",
});

userAuth.onMount = (setAtom) => {
  setAtom((data) => ({ ...data, requestState: "loading" }));

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setAtom(() => ({
        requestState: "complete",
        user: {
          _id: user.uid,
          fullName: user.displayName,
        },
      }));

      return;
    }

    setAtom(() => ({ user: null, requestState: "complete" }));
  });
};
