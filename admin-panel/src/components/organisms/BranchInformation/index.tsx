import * as S from "./styles";

import BranchDetailContent from "components/molecules/BranchDetailContent";
import { currentBranchStore } from "store/currentBranchStore";
import useUpdateBranchDescription from "hooks/useUpdateBranchDescription";
import useUpdateBranchAddress from "hooks/useUpdateBranchAddress";

import { useAtomValue } from "jotai/utils";
import useUpdateBranchPhoneNumber from "hooks/useUpdateBranchPhoneNumber";
import { useState } from "react";

const BranchInformation = () => {
  const pageData = useAtomValue(currentBranchStore);

  const [indexUpdated, setIndexUpdated] = useState<number>(-1);

  const { requestStateDescription, onUpdateDescription } =
    useUpdateBranchDescription();

  const { requestStateAddress, onUpdateAddress } = useUpdateBranchAddress();

  const { requestStatePhoneNumber, onUpdatePhoneNumber } =
    useUpdateBranchPhoneNumber();

  const changeIndex = (new_index: number) => () => {
    setIndexUpdated((index) => (index === new_index ? -1 : new_index));
  };

  const getBranchDetailC = () => {
    const array = [];

    array.push({
      data: {
        title: "Description",
        id: pageData?.branch._id,
        content: pageData?.branch.description,
      },
      onUpdate: onUpdateDescription,
      isLoading: requestStateDescription === "loading",
    });

    array.push({
      data: {
        id: pageData?.branch._id,
        title: "Numero de contacto",
        content: pageData?.branch.phoneNumber,
      },
      onUpdate: onUpdatePhoneNumber,
      isLoading: requestStatePhoneNumber === "loading",
    });

    return array;
  };

  return (
    <S.Container>
      {getBranchDetailC().map((v, i) => (
        <BranchDetailContent
          data={v.data}
          onUpdate={v.onUpdate}
          isLoading={v.isLoading}
          onClick={changeIndex(i)}
          isActive={indexUpdated === i || indexUpdated === -1}
        />
      ))}

      {/* <BranchDetailContent
        data={{
          title: "Image de Perfil",
          id: pageData?.branch._id,
        }}
        index={2}
        content={pageData?.branch.bannerImage.url}
        onClick={changeIndex(2)}
      /> */}
      {/* <BranchDetailContent
        title="Ubicacion geografica"
        id={pageData?.branch._id}
        index={3}
        content={pageData?.branch.location.address}
        onUpdate={onUpdateAddress}
        isLoading={requestStateAddress === "loading"}
        onClick={changeIndex(3)}
      /> */}
    </S.Container>
  );
};

export default BranchInformation;
