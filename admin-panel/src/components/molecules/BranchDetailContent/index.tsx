import * as S from "./styles";

import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import Input from "components/atoms/Input";
import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { RequestStateType } from "application/types/RequestStateType";
import Spinner from "components/atoms/Spinner";

type BranchDetailContentProps = {
  id: string;
  tittle: string;
  content: string;
  requestState?: RequestStateType;
  onUpdate?(id: string, value: string): void;
};

const BranchDetailContent: FC<BranchDetailContentProps> = ({
  id,
  tittle,
  content,
  requestState,
  onUpdate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [activeInput, setActiveInput] = useState<boolean>();

  const onClickUpdate = () => {
    onUpdate(id, inputRef.current.value);
  };

  return (
    <S.Container>
      <S.Head>
        <Title size="default">{tittle}</Title>
        <S.ButtonContainer>
          {!activeInput ? (
            <S.EditButton>
              <ButtonRounded
                text={"Editar"}
                onClick={() => setActiveInput(() => true)}
              />
            </S.EditButton>
          ) : (
            <>
              <ButtonRounded
                text={"Guardar"}
                onClick={() => {
                  onClickUpdate();
                  setActiveInput(() => false);
                }}
                color="blue"
              />
              <ButtonRounded
                text={"Cancelar"}
                onClick={() => {
                  setActiveInput(() => false);
                }}
              />
            </>
          )}
        </S.ButtonContainer>
      </S.Head>
      <div>
        {requestState === "loading" ? (
          <Spinner color="blue" size="big" />
        ) : (
          <>
            <S.TextContainer
              className={classNames({
                active: !activeInput,
              })}
            >
              <Description size="small" color="black">
                {content}
              </Description>
            </S.TextContainer>
            <S.InputContainer
              className={classNames({
                active: activeInput,
              })}
            >
              <Input defaultValue={content} type="text" ref={inputRef} />
            </S.InputContainer>
          </>
        )}
      </div>
    </S.Container>
  );
};

BranchDetailContent.defaultProps = {
  requestState: "initialize",
};

export default BranchDetailContent;
