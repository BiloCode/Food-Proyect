import { RouteComponentProps } from "@reach/router";

import HeaderTitle from "components/molecules/HeaderTitle";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

const Foods = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <PageLimiterContainer>
      <HeaderTitle title="Nuestros Comestibles" />
    </PageLimiterContainer>
  </PageWithSidebarBox>
);

export default Foods;
