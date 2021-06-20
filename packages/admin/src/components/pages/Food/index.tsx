import { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import FoodActions from "components/organisms/FoodActions";
import HeaderTitle from "components/molecules/HeaderTitle";
import FoodGridList from "components/organisms/FoodGridList";
import FoodModalCreate from "components/templates/FoodModalCreate";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import useActive from "hooks/useActive";
import useScroll from "hooks/useScroll";
import useFoodPageInit from "hooks/useFoodPageInit";

const Foods = (_: RouteComponentProps) => {
  const { foodFilter, onSearchByName, foodStored } = useFoodPageInit();

  const createModal = useActive();

  const { enabled, disabled } = useScroll();

  useEffect(() => {
    createModal.active && disabled();
    !createModal.active && enabled();
  }, [createModal.active]);

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
