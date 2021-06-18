import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

type DeleteAtom = {
  state: boolean;
  ids: string[];
};

export const menuDeleteMode = atomWithReset<DeleteAtom>({
  ids: [],
  state: false,
});

export const addNewIdSelect = atom(null, (get, set, _id: string) => {
  const newIds = [...get(menuDeleteMode).ids];
  const idExists = newIds.some((v) => v === _id);

  if (idExists) return;

  newIds.push(_id);

  set(menuDeleteMode, (delete_mode) => ({
    ...delete_mode,
    ids: newIds,
  }));
});
