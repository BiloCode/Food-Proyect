import { RouteComponentProps } from "@reach/router";

import HeaderTitle from "components/molecules/HeaderTitle";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import ClientsListContainer from "components/organisms/ClientsListContainer";

import { useAtomValue } from "jotai/utils";
import { clients } from "store/clients";

const Clients = (_: RouteComponentProps) => {
  const client = useAtomValue(clients);

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle
          title="Usuarios registrados"
          subtitleMessage={`${client.data.length} usuarios.`}
        />
        <ClientsListContainer />
      </PageLimiterContainer>
    </PageWithSidebarBox>
  );
};

export default Clients;
