import { IconType } from "react-icons/lib";

export type DropdownItem = {
  icon: IconType;
  text: string;
  onClick(): void;
};

export type PageTab = {
  title: string;
  options: DropdownItem[];
};
