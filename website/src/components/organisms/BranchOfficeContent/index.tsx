import faker from "faker";
import * as S from "./styles";

import BranchOfficeInformation from "components/molecules/BranchOfficeInformation";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

type BranchOfficeContentProps = {
  branchOfficeFilter: BranchOfficeModelType[];
};

const BranchOfficeContent = ({
  branchOfficeFilter,
}: BranchOfficeContentProps) => (
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

export default BranchOfficeContent;
