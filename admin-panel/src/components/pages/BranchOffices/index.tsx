import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HeaderTitle from "components/molecules/HeaderTitle";
import BranchOfficeCard from "components/organisms/BranchOfficeCard";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import CreateBranchModal from "components/templates/CreateBranchModal";

import { useAtomValue } from "jotai/utils";
import { branchOffice } from "store/branchOffice";

import useActive from "hooks/useActive";

import StarsPromedy from "application/utils/StarsPromedy";

const BranchOffices = (_: RouteComponentProps) => {
  const branchOffices = useAtomValue(branchOffice);

  const modalCreatebranch = useActive();

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle
          title="Nuestras Sucursales"
          subtitleMessage={`${branchOffices.data.length} sucursales   registradas.`}
          button={{
            onClick: modalCreatebranch.toggleActive,
            text: "Crear Sucursal",
          }}
        />
        <S.BranchOfficeListContainer>
          <S.BranchOfficeList>
            {branchOffices.data.map((v) => (
              <BranchOfficeCard
                id={v._id}
                name={v.name}
                image={v.bannerImage.url}
                description={v.description}
                stars={StarsPromedy.exec(v.puntuactions)}
              />
            ))}
          </S.BranchOfficeList>
        </S.BranchOfficeListContainer>
      </PageLimiterContainer>
      {modalCreatebranch.active && <CreateBranchModal></CreateBranchModal>}
    </PageWithSidebarBox>
  );
};

export default BranchOffices;
