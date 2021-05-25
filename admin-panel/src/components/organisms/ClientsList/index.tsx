import * as S from "./styles";

import Icon from "components/atoms/Icon";
import RoundedText from "components/atoms/RoundedText";
import ButtonRounded from "components/atoms/ButtonRounded";

import DateFormatting from "application/utils/DateFormatting";
import defaultImage from "assets/images/default-profile-image.png";

import { IoLogoGoogle } from "react-icons/io";
import { IoAtOutline } from "react-icons/io5";
import { ClientModelType } from "application/types/ClientModelType";

type ClientsListProps = {
  pageInit: number;
  pageFinish: number;
  clients: ClientModelType[];
};

const ClientsList = ({ pageInit, pageFinish, clients }: ClientsListProps) => {
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
        {clients?.map((v, i) => {
          // 1 - 5
          if (i + 1 >= pageInit && i < pageFinish) {
            return (
              <S.RowTable key={i}>
                <S.ImageTable>
                  <S.CellBar />
                  <S.ImageContainer>
                    <S.Image>
                      <img src={v.profileImage.url || defaultImage} alt="" />
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
                      v.authenticationType === "email"
                        ? IoAtOutline
                        : IoLogoGoogle
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
            );
          }
        })}
      </S.Container>
    </div>
  );
};
export default ClientsList;
