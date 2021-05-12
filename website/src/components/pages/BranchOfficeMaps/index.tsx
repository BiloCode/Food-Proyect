import { RouteComponentProps } from "@reach/router";
import { ChangeEvent, FC, useState } from "react";
import * as S from "./styles";

import Image from "components/atoms/Image";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import Logo from "assets/images/Logo.svg";
import MapProvider from "context/MapContext/provider";
import MapCredentials from "components/molecules/Map";
import ReturnHomeButton from "components/molecules/ReturnHomeButton";
import SearchBranchOffice from "components/organisms/SearchBranchOffice";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

const BranchOfficeMap: FC<RouteComponentProps> = ({ navigate }) => {
  const onClickHome = () => navigate("/home");
  const context = useBranchOfficeContext();

  const [branchOfficeFilter, setBranchOfficeFilter] = useState<
    BranchOfficeModelType[]
  >(context.branchOffices);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newList: BranchOfficeModelType[] = [];
    context.branchOffices.map((v) => {
      let name = v.name.toLowerCase();
      if (name.includes(e.target.value)) {
        newList.push(v);
      }
    });
    setBranchOfficeFilter(newList);
  };

  return (
    <S.MainContainer>
      <MapProvider>
        <div>
          <S.Image>
            <Image src={Logo} />
          </S.Image>
          <S.InformationContainer>
            <SearchBranchOffice onChange={onChange} />
            <BranchOfficeMapList branchOffices={branchOfficeFilter} />
            <ReturnHomeButton onClick={onClickHome} />
          </S.InformationContainer>
        </div>

        <MapCredentials />
      </MapProvider>
    </S.MainContainer>
  );
};

export default BranchOfficeMap;
