import * as S from "./styles";

import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import Input from "components/atoms/Input";
import classNames from "classnames";
import Spinner from "components/atoms/Spinner";

import { ChangeEvent, ChangeEventHandler, FC, useRef, useState } from "react";

type BranchDetailContentProps = {
  data: {
    id: string;
    title: string;
    content?: string;
  };
  isModal?: boolean;
  isFile?: boolean;
  isLoading?: boolean;
  isActive: boolean;
  onChangeImage?(v: ChangeEvent<HTMLInputElement>);
  onUpdate?(id: string, value: string): void;
  onClick?(): void;
};

const BranchDetailContent: FC<BranchDetailContentProps> = ({
  data,
  isLoading,
  isActive,
  isModal,
  isFile,
  onChangeImage,
  onClick,
  onUpdate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [activeInput, setActiveInput] = useState<boolean>(false);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const onClickUpdate = () => {
    onUpdate(data.id, inputRef.current.value);
  };

  const toggleActive = () => {
    if (!isModal) {
      setActiveInput((active) => !active);
      onClick();
    }

    if (isFile) inputFileRef.current.click();
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
            <S.ButtonFile>
              <S.LabelFile>
                <ButtonRounded onClick={toggleActive} text="Editar" />
                {isFile && (
                  <S.InputFile
                    ref={inputFileRef}
                    onChange={onChangeImage}
                    type="file"
                    accept="image/*"
                    id="upload-image"
                  />
                )}
              </S.LabelFile>
            </S.ButtonFile>
          )}
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
