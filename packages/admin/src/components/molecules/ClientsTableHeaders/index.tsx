import * as S from "./styles";

import ClientRowTableGrid from "components/atoms/ClientRowTableGrid";

const ClientsTableHeaders = () => {
  return (
    <ClientRowTableGrid>
      <S.TitleTable>Imagen</S.TitleTable>
      <S.TitleTable>Nombre completo</S.TitleTable>
      <S.TitleTable>Email</S.TitleTable>
      <S.TitleTable>Fecha de creacion</S.TitleTable>
      <S.TitleTable>Puntuaciones</S.TitleTable>
      <S.TitleTable></S.TitleTable>
    </ClientRowTableGrid>
  );
};

export default ClientsTableHeaders;
