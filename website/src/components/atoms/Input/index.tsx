import { ChangeEvent } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "email";
export type InputProps = {
  type?: InputType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ type, onChange }: InputProps) => (
  <S.CustomInput onChange={onChange} required type={type} />
);

Input.defaultProps = {
  type: "text",
};

export default Input;
