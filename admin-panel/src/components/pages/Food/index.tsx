import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import FoodActions from "components/organisms/FoodActions";
import HeaderTitle from "components/molecules/HeaderTitle";
import FoodGridList from "components/organisms/FoodGridList";
import FoodModalCreate from "components/organisms/FoodModalCreate";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import useFoodPageInit from "hooks/useFoodPageInit";

const Foods = (_: RouteComponentProps) => {
  const { createModal, foodFilter, onSearchByName, foodStored } =
    useFoodPageInit();

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle
          title="Nuestros Comestibles"
          subtitleMessage={`${foodStored} comidas registradas.`}
        />
        <S.ContainerContent>
          <FoodActions
            onChangeSearch={onSearchByName}
            onCreateToggle={createModal.toggleActive}
          />
          <FoodGridList foods={foodFilter} />
        </S.ContainerContent>
      </PageLimiterContainer>
      {createModal.active && (
        <FoodModalCreate onClose={createModal.toggleActive} />
      )}
    </PageWithSidebarBox>
  );
};

export default Foods;
