import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

type DeleteAtom = {
  state: boolean;
  ids: string[];
};

export const deleteMode = atomWithReset<DeleteAtom>({
  ids: [],
  state: false,
});

export const addNewIdSelect = atom(null, (get, set, _id: string) => {
  const newIds = [...get(deleteMode).ids];
  const idExists = newIds.some((v) => v === _id);

  if (idExists) return;

  newIds.push(_id);

  set(deleteMode, (delete_mode) => ({
    ...delete_mode,
    ids: newIds,
  }));
});

export const activeMode = atom(null, (_, set) => {
  set(deleteMode, (delete_mode) => ({
    ...delete_mode,
    state: true,
  }));
});

export const removeId = atom(null, (_, set, _id: string) => {
  set(deleteMode, (delete_mode) => ({
    ...delete_mode,
    ids: [...delete_mode.ids].filter((id) => id !== _id),
  }));
});
