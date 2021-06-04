import { FC, useRef, useState } from "react";
import * as S from "./styles";

import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import Input from "components/atoms/Input";
import classNames from "classnames";
import Spinner from "components/atoms/Spinner";

type BranchDetailContentProps = {
  data: {
    id: string;
    title: string;
    content: string;
  };
  isLoading?: boolean;
  isActive: boolean;
  onUpdate?(id: string, value: string): void;
  onClick?(): void;
};

const BranchDetailContent: FC<BranchDetailContentProps> = ({
  data,
  isLoading,
  isActive,
  onClick,
  onUpdate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [activeInput, setActiveInput] = useState<boolean>(false);

  const onClickUpdate = () => {
    onUpdate(data.id, inputRef.current.value);
  };

  const toggleActive = () => {
    setActiveInput((active) => !active);
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
        <Title size="default">{data.title}</Title>
        <S.ButtonContainer
          className={classNames({
            double_button: activeInput,
          })}
        >
          {isActive && (
            <>
              {activeInput && (
                <ButtonRounded
                  color="blue"
                  text={"Guardar"}
                  onClick={onClickSave}
                />
              )}
              <ButtonRounded
                onClick={toggleActive}
                text={!activeInput ? "Editar" : "Cancelar"}
              />
            </>
          )}
        </S.ButtonContainer>
      </S.Head>
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
    </S.Container>
  );
};

export default BranchDetailContent;
