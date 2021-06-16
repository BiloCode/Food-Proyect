import { ChangeEvent, FocusEvent, forwardRef } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email" | "number";

export type InputProps = {
  id?: string;
  type?: InputType;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  onBlur?(): void;
  onFocus?(ev: FocusEvent<HTMLInputElement>): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    type,
    defaultValue,
    placeholder,
    maxLength,
    onChange,
    onFocus,
    onBlur,
  } = props;

  return (
    <S.CustomInput
      id={id}
      ref={ref}
      required
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={defaultValue}
      step={type === "number" && "any"}
    />
  );
});

Input.defaultProps = {
  type: "text",
};

export default Input;
