import { forwardRef } from "react";
import * as S from "./styles";

export type TextareaProps = {
  defaultValue?: string;
  maxLength?: number;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ defaultValue, maxLength }, ref) => (
    <S.CustomTextarea
      ref={ref}
      required
      rows={5}
      maxLength={maxLength}
      defaultValue={defaultValue}
    />
  )
);

export default Textarea;
