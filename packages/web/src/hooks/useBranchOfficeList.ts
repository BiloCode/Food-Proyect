import { useEffect, useState } from "react";

import { Types } from "@food/shared";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

type optionType = "All" | "vegetarian" | "carnivorous" | "mix";

const useBranchOfficeList = () => {
  const { branchOffices, requestState } = useBranchOfficeContext();

  const [listWithFilter, setListWithFilter] =
    useState<Types.BranchOffice[]>(branchOffices);

  useEffect(() => {
    if (requestState !== "complete") return;

    setListWithFilter(branchOffices);
  }, [requestState]);

  const onFilterChange = (optionSelected: optionType) => {
    const listSearching = [...branchOffices].filter((v) => {
      const branchOfficeName = v.foodType;
      return branchOfficeName.includes(optionSelected);
    });

    if (optionSelected === "All") {
      setListWithFilter(branchOffices);
      return;
    }

    setListWithFilter(() => listSearching);
  };

  return {
    onFilterChange,
    listWithFilter,
  };
};

export default useBranchOfficeList;
