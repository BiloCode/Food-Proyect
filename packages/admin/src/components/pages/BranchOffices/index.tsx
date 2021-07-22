import { RouteComponentProps } from "@reach/router";

import HeaderTitle from "components/molecules/HeaderTitle";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import CreateBranchModal from "components/templates/CreateBranchModal";
import BranchOfficeList from "components/organisms/BranchOfficeList";

import { useAtomValue } from "jotai/utils";
import { branchOffice } from "store/branchOffice";

import useActive from "hooks/useActive";

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
        <BranchOfficeList list={branchOffices.data} />
      </PageLimiterContainer>
      {modalCreatebranch.active && (
        <CreateBranchModal onClose={modalCreatebranch.toggleActive} />
      )}
    </PageWithSidebarBox>
  );
};

export default BranchOffices;
