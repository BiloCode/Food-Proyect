import { ChangeEvent, forwardRef } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email";

export type InputProps = {
  type?: InputType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  defaultValue?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, defaultValue, onChange, placeholder }, ref) => (
    <S.CustomInput
      ref={ref}
      required
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
);

Input.defaultProps = {
  type: "text",
};

export default Input;
