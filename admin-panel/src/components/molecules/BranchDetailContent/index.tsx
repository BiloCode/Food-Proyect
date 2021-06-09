import * as S from "./styles";

import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import Input from "components/atoms/Input";
import classNames from "classnames";
import Spinner from "components/atoms/Spinner";

import { FC, memo, useRef, useState } from "react";

type BranchDetailContentProps = {
  data: {
    id: string;
    title: string;
    content?: string;
  };
  isModal?: boolean;
  isLoading?: boolean;
  isActive: boolean;
  onUpdate?(id: string, value: string): void;
  onClick?(): void;
};

const BranchDetailContent: FC<BranchDetailContentProps> = ({
  data,
  isLoading,
  isActive,
  isModal,
  onClick,
  onUpdate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [activeInput, setActiveInput] = useState<boolean>(false);

  const onClickUpdate = () => {
    onUpdate(data.id, inputRef.current.value);
  };

  const toggleActive = () => {
    if (!isModal) {
      setActiveInput((active) => !active);
    }
    onClick();
  };

  const onClickSave = () => {
    onClickUpdate();
    setActiveInput(false);
    onClick();
  };
  return (
    <S.Container>
      <S.Head>
        <Title size="small-medium">{data.title}</Title>
        <S.ButtonContainer
          className={classNames({
            double_button: activeInput,
          })}
        >
          {!isActive && <ButtonRounded onClick={toggleActive} text="Editar" />}
          {activeInput && (
            <>
              <ButtonRounded
                color="blue"
                text={"Guardar"}
                onClick={onClickSave}
              />
              <ButtonRounded onClick={toggleActive} text="Cancelar" />
            </>
          )}
        </S.ButtonContainer>
      </S.Head>
      {data.content && (
        <div>
          {isLoading ? (
            <Spinner color="blue" size="small" />
          ) : (
            <>
              {!activeInput ? (
                <Description size="small" color="black">
                  {data.content}
                </Description>
              ) : (
                <Input defaultValue={data.content} type="text" ref={inputRef} />
              )}
            </>
          )}
        </div>
      )}
    </S.Container>
  );
};

export default memo(BranchDetailContent);
