import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HeaderTitle from "components/molecules/HeaderTitle";
import ClientsList from "components/organisms/ClientsList";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import InputWithIcon from "components/molecules/InputWithIcon";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";

import { IoMdSearch } from "react-icons/io";

const Clients = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <PageLimiterContainer>
      <HeaderTitle title="Usuarios registrados" />
      <S.SearchContainer>
        <InputWithIcon icon={IoMdSearch} text="Digite un nombre..." />
      </S.SearchContainer>
      <ClientsList />
    </PageLimiterContainer>
  </PageWithSidebarBox>
);

export default Clients;
