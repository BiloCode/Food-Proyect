import * as S from "./styles";

export type InputType = "text" | "password" | "email";
export type InputProps = {
  type?: InputType;
  onChange?(): void;
};

const Input = ({ type, onChange }: InputProps) => (
  <S.CustomInput onChange={onChange} type={type} />
);

Input.defaultProps = {
  type: "text",
};

export default Input;
