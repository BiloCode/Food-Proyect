import faker from "faker";
import * as S from "./styles";

import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import BranchOfficeInformation from "components/molecules/BranchOfficeInformation";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { useState } from "react";

type BranchOfficeContentProps = {
  branchOfficeFilter: BranchOfficeModelType[];
};

const BranchOfficeContent = ({
  branchOfficeFilter,
}: BranchOfficeContentProps) => {
  const context = useBranchOfficeContext();

  /*   // Eso de abajo sera un map, esta de pruebita no mas v:

  console.log(context.branchOffices); */

  return (
    <S.MainContainer>
      <S.Container>
        {branchOfficeFilter.map((v, i) => (
          <BranchOfficeInformation
            key={i}
            id={v._id}
            image={v.bannerImage.url}
            textTittle={v.name}
            textDescription={faker.lorem.words(20)}
            stars={v.stars}
          />
        ))}
      </S.Container>
    </S.MainContainer>
  );
};

export default BranchOfficeContent;
