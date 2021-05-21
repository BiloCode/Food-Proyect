import { memo } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import SectionSeparator from "components/atoms/SectionSeparator";
import StatisticRow from "components/molecules/StatisticRow";

import useCollectionAllData from "hooks/useCollectionAllData";

const SystemStatistics = () => {
  const { clients, food, branchOffice } = useCollectionAllData();

  return (
    <SectionSeparator>
      <Title>Estadisticas del Sistema</Title>
      <S.TableElement>
        <StatisticRow
          text="Personas Registradas"
          amount={clients.data.length}
        />
        <StatisticRow
          text="Surcusales Registradas"
          amount={branchOffice.data.length}
        />
        <StatisticRow text="Alimentos Registrados" amount={food.data.length} />
      </S.TableElement>
    </SectionSeparator>
  );
};

export default memo(SystemStatistics);
