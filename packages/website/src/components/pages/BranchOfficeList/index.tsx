import { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Slider from "components/molecules/Slider";
import Footer from "components/organisms/Footer";
import NavigationBar from "components/organisms/NavigationBar";
import BranchOfficeContent from "components/organisms/BranchOfficeContent";
import BranchOfficeFilter from "components/organisms/BranchOfficeFilter";

import { BranchOfficeModelType } from "@food-proyect/shared-types";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

type optionType = "All" | "vegetarian" | "carnivorous" | "mix";

const BranchOfficeList: FC<RouteComponentProps> = () => {
  const { branchOffices, requestState } = useBranchOfficeContext();

  const [branchOfficeFilter, setBranchOfficeFilter] =
    useState<BranchOfficeModelType[]>(branchOffices);

  useEffect(() => {
    if (requestState !== "complete") return;
    setBranchOfficeFilter(branchOffices);
  }, [requestState]);

  const onClickOption = (optionSelected: optionType) => {
    const filteredList = [...branchOffices].filter((v) => {
      const branchOfficeName = v.foodType;
      return branchOfficeName.includes(optionSelected);
    });
    if (optionSelected === "All") {
      setBranchOfficeFilter(branchOffices);
    } else {
      setBranchOfficeFilter(() => filteredList);
    }
  };

  return (
    <S.MainContainer>
      <NavigationBar />
      <Slider />
      <S.ContainerElements>
        <BranchOfficeFilter onClickOption={onClickOption} />
        <BranchOfficeContent branchOfficeFilter={branchOfficeFilter} />
      </S.ContainerElements>
      <Footer />
    </S.MainContainer>
  );
};

export default BranchOfficeList;
