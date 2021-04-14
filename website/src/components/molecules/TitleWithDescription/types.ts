import { DescriptionType } from "components/atoms/Description/types";
import { TitleType } from "components/atoms/Title/types";

type orientationType = "right" | "left" | "center";

export type TitleWithDescriptionType = {
  tittle: TitleType;
  description: DescriptionType;
  orientation: orientationType;
  textTittle: string;
  textDescription: string;
};
