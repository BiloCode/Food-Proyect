import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import { IoMdPerson } from "react-icons/io";
import useUpdateBranchLocation from "hooks/useUpdateBranchLocation";
import { currentBranch as currentBranchStore } from "store/currentBranch";

import { useAtomValue } from "jotai/utils";
import { useMemo } from "react";
import { timeStamp } from "node:console";

type BranchLocationManuallyUpdateProps = {
  onClose(): void;
};

const BranchLocationManuallyUpdate = ({
  onClose,
}: BranchLocationManuallyUpdateProps) => {
  const currentBranch = useAtomValue(currentBranchStore);
  const {
    addressRef,
    latitudeRef,
    longitudeRef,
    onUpdateAddress,
    requestStateAddress,
    setRequestStateAddress,
  } = useUpdateBranchLocation();

  useMemo(() => {
    if (requestStateAddress === "complete") {
      onClose();
      setRequestStateAddress("initialize");
    }
  }, [requestStateAddress]);

  return (
    <S.Container onSubmit={onUpdateAddress}>
      <S.ControlsContainer>
        <FormControl
          icon={IoMdPerson}
          labelText="Nombre del lugar"
          type="text"
          ref={addressRef}
          defaultValue={currentBranch.branch.location.address}
        />
        <S.ControlsCoordsContainer>
          <FormControl
            icon={IoMdPerson}
            labelText="Latitud"
            type="number"
            ref={latitudeRef}
            defaultValue={currentBranch.branch.location.latitude.toString()}
          />
          <FormControl
            icon={IoMdPerson}
            labelText="Longitud"
            type="number"
            ref={longitudeRef}
            defaultValue={currentBranch.branch.location.longitude.toString()}
          />
        </S.ControlsCoordsContainer>
      </S.ControlsContainer>
      <S.ButtonsContainer>
        <Button
          type="submit"
          text="Actualizar informacion"
          styles={{ color: "blue", size: "medium" }}
          isLoading={requestStateAddress === "loading"}
        />
        <Button
          type="button"
          text="Cerrar Ventana"
          styles={{ color: "yellow", size: "medium" }}
          onClick={onClose}
        />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default BranchLocationManuallyUpdate;
