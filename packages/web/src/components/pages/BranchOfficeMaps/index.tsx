import { ChangeEvent, FC, useEffect, useState } from "react";
import { RouteComponentProps, useNavigate } from "@reach/router";
import * as S from "./styles";

import Logo from "assets/images/Logo.svg";
import { Image } from "@food/components";
import MapProvider from "context/MapContext/provider";
import MapCredentials from "components/molecules/Map";
import ReturnHomeButton from "components/molecules/ReturnHomeButton";
import SearchBranchOffice from "components/organisms/SearchBranchOffice";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";

import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import { Utils, Types } from "@food/shared";

const BranchOfficeMap: FC<RouteComponentProps> = () => {
  const { branchOffices, requestState } = useBranchOfficeContext();

  const navigation = useNavigate();

  const onClickButtonHome = () => navigation("/");

  const [branchOfficeFilter, setBranchOfficeFilter] =
    useState<Types.BranchOffice[]>(branchOffices);

  useEffect(() => {
    if (requestState !== "complete") return;
    setBranchOfficeFilter(branchOffices);
  }, [requestState]);

  const onChange = Utils.debounceTime((ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value;
    const filteredList = [...branchOffices].filter((v) => {
      const branchOfficeName = v.name.toLocaleLowerCase();
      return branchOfficeName.includes(inputValue);
    });

    setBranchOfficeFilter(() => filteredList);
  });

  return (
    <S.MainContainer>
      <MapProvider>
        <div>
          <S.Image onClick={onClickButtonHome}>
            <Image src={Logo} />
          </S.Image>
          <S.InformationContainer>
            <SearchBranchOffice onChange={onChange} />
            <BranchOfficeMapList branchOffices={branchOfficeFilter} />
            <ReturnHomeButton />
          </S.InformationContainer>
        </div>
        <MapCredentials />
      </MapProvider>
    </S.MainContainer>
  );
};

export default BranchOfficeMap;
