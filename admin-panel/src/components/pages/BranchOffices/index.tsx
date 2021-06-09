import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HeaderTitle from "components/molecules/HeaderTitle";
import BranchOfficeCard from "components/organisms/BranchOfficeCard";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import { useAtomValue } from "jotai/utils";
import { branchOffice } from "store/branchOffice";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";

const BranchOffices = (_: RouteComponentProps) => {
  const branchOffices = useAtomValue(branchOffice);

  const onClickToCreate = () => console.log("Create...");

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle
          title="Nuestras Sucursales"
          subtitleMessage={`${branchOffices.data.length} sucursales   registradas.`}
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
