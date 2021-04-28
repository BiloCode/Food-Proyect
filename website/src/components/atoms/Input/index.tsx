import { forwardRef } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email";
export type InputProps = {
  type?: InputType;
  defaultValue?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, defaultValue }, ref) => (
    <S.CustomInput ref={ref} required type={type} defaultValue={defaultValue} />
  )
);

Input.defaultProps = {
  type: "text",
};

export default Input;
