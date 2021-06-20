import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

type ScreenLoader = {
  active: boolean;
  message: string;
};

export const screenLoader = atomWithReset<ScreenLoader>({
  active: false,
  message: "",
});

export const activeScreenLoader = atom(null, (_, set, message: string) => {
  set(screenLoader, () => ({
    message,
    active: true,
  }));
});
