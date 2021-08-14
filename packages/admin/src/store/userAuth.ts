import { atomWithReset } from "jotai/utils";
import firebase from "firebase";

import { Admin } from "@food/shared-types";
import { RequestState } from "@food/shared-types";

type UserAtomType = {
  user: Admin;
  requestState: RequestState;
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
