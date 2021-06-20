import { ChangeEvent, forwardRef } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email";

export type InputProps = {
  type?: InputType;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, defaultValue, placeholder, maxLength, onChange }, ref) => (
    <S.CustomInput
      ref={ref}
      required
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
);

Input.defaultProps = {
  type: "text",
};

export default Input;
