import { atom } from "jotai";

type DeleteAtom = {
  state: boolean;
  ids: string[];
};

export const deleteMode = atom<DeleteAtom>({
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

export const removeId = atom(null, (_, set, _id: string) => {
  set(deleteMode, (delete_mode) => ({
    ...delete_mode,
    ids: [...delete_mode.ids].filter((id) => id !== _id),
  }));
});
