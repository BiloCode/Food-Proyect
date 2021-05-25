import { RouteComponentProps } from "@reach/router";

import HeaderTitle from "components/molecules/HeaderTitle";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import ClientsListContainer from "components/organisms/ClientsListContainer";

const Clients = (_: RouteComponentProps) => {
  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle title="Usuarios registrados" />
        <ClientsListContainer />
      </PageLimiterContainer>
    </PageWithSidebarBox>
  );
};

export default Clients;
