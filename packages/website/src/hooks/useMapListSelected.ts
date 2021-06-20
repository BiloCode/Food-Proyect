import { useState } from "react";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeTypes = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

const useMapListSelected = () => {
  const [mapCoords, setMapCoords] = useState<BranchOfficeTypes>({
    latitude: 0,
    length: 0,
    text: "",
    tittle: "",
    stars: 0,
  });

  const onClickBranchOffice = (params: BranchOfficeTypes) => {
    setMapCoords({ ...params });
  };

  console.log(mapCoords);

  return {
    mapCoords,
    onClickBranchOffice,
  };
};

export default useMapListSelected;
