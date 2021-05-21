import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HeaderTitle from "components/molecules/HeaderTitle";
import BranchOfficeCard from "components/organisms/BranchOfficeCard";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import { useAtomValue } from "jotai/utils";
import { branchOfficeStore } from "store/branchOfficeStore";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";

const BranchOffices = (_: RouteComponentProps) => {
  const branchOffices = useAtomValue(branchOfficeStore);

  const onClickToCreate = () => console.log("Create...");

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle
          title="Nuestras Sucursales"
          button={{ onClick: onClickToCreate, text: "Crear Sucursal" }}
        />
        <S.BranchOfficeListContainer>
          <S.BranchOfficeList>
            {branchOffices.data.map((v) => (
              <BranchOfficeCard
                id={v._id}
                name={v.name}
                stars={v.stars}
                image={v.bannerImage.url}
                description={v.description}
              />
            ))}
          </S.BranchOfficeList>
        </S.BranchOfficeListContainer>
      </PageLimiterContainer>
    </PageWithSidebarBox>
  );
};

export default BranchOffices;
