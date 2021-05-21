import * as S from "./styles";

import { RouteComponentProps } from "@reach/router";
import HeaderTitle from "components/molecules/HeaderTitle";

import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import InputWithIcon from "components/molecules/InputWithIcon";
import { IoMdSearch } from "react-icons/io";
import ClientsList from "components/organisms/ClientsList";

const Clients = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <S.MainContainer>
      <HeaderTitle title="Usuarios registrados" />
      <S.SearchContainer>
        <InputWithIcon icon={IoMdSearch} text="Digite un nombre..." />
      </S.SearchContainer>
      <ClientsList />
    </S.MainContainer>
  </PageWithSidebarBox>
);

export default Clients;
