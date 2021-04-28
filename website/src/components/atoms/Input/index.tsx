import { ChangeEvent } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email";

export type InputProps = {
  type?: InputType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
};

const Input = ({ type, onChange, placeholder }: InputProps) => (
  <S.CustomInput
    onChange={onChange}
    required
    type={type}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  type: "text",
};

export default Input;
