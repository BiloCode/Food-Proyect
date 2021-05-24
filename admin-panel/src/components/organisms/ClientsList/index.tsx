import * as S from "./styles";

import Icon from "components/atoms/Icon";
import RoundedText from "components/atoms/RoundedText";
import ButtonRounded from "components/atoms/ButtonRounded";

import { clientStore } from "store/clientStore";
import { useAtomValue } from "jotai/utils";
import { IoLogoGoogle } from "react-icons/io";
import { IoAtOutline } from "react-icons/io5";
import DateFormatting from "application/utils/DateFormatting";

const ClientsList = () => {
  const clients = useAtomValue(clientStore);

  return (
    <div>
      <S.Container>
        <S.RowTable>
          <S.TitleTable>Imagen</S.TitleTable>
          <S.TitleTable>Nombre completo</S.TitleTable>
          <S.TitleTable>Email</S.TitleTable>
          <S.TitleTable>Fecha de creacion</S.TitleTable>
          <S.TitleTable>Puntuaciones</S.TitleTable>
          <S.TitleTable></S.TitleTable>
        </S.RowTable>
        {clients.data.map((v, i) => (
          <S.RowTable key={i}>
            <S.ImageTable>
              <S.CellBar />
              <S.ImageContainer>
                <S.Image>
                  <img src={v.profileImage.url} alt="" />
                </S.Image>
              </S.ImageContainer>
            </S.ImageTable>

            <S.NameTable>
              <S.NameContainer>
                <S.ContentTable bold="bold" color="black-light">
                  {v.fullName}
                </S.ContentTable>
              </S.NameContainer>
            </S.NameTable>

            <S.EmailTable>
              <Icon
                size="small-medium"
                type={
                  v.authenticationType === "email" ? IoAtOutline : IoLogoGoogle
                }
              />
            </S.EmailTable>

            <S.DateTable>
              <S.DateContainer>
                <RoundedText bgColor="blue" size="extra_small">
                  {DateFormatting.applyFormat(v.createdAt.toDate())}
                </RoundedText>
              </S.DateContainer>
            </S.DateTable>

            <S.PuntuactionTable>
              <S.ContentTable bold="semi-bold" color="black-light">
                {v.puntuaction.store.length}
              </S.ContentTable>
            </S.PuntuactionTable>

            <S.ButtonTable>
              <ButtonRounded text="Ver perfil" />
            </S.ButtonTable>
          </S.RowTable>
        ))}
      </S.Container>
    </div>
  );
};
export default ClientsList;
