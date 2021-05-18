import { atom } from "jotai";
import firebase from "firebase";

import { AdminModelType } from "application/types/AdminModelType";
import { RequestStateType } from "application/types/RequestStateType";

type UserAtomType = {
  user: AdminModelType;
  requestState: RequestStateType;
};

export const userAuth = atom<UserAtomType>({
  user: null,
  requestState: "initialize",
});

userAuth.onMount = (setAtom) => {
  setAtom((data) => ({ ...data, requestState: "loading" }));

  const firebaseAuthState = firebase.auth().onAuthStateChanged((user) => {
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

    setAtom((data) => ({ ...data, requestState: "complete" }));
  });

  return () => firebaseAuthState();
};

//Selectors
export const resetUserAuth = atom(null, (get, set) => {
  const userStored = get(userAuth);

  set(userAuth, {
    ...userStored,
    user: null,
  });
});
