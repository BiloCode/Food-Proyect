import SucursalResults from "components/molecules/SucursalResults";
import SucursalSelect from "components/molecules/SucursalSelect";
import * as S from "./styles";

const SucursalFilter = () => {
  return (
    <S.SucursalFilterContainer>
      <SucursalResults tittle="Todas las sucursales" results={25} />
      <SucursalSelect />
    </S.SucursalFilterContainer>
  );
};

export default SucursalFilter;
