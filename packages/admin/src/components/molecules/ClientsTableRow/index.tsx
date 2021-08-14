import * as S from "./styles";

import Icon from "components/atoms/Icon";

import { IoLogoGoogle } from "react-icons/io";
import { IoAtOutline } from "react-icons/io5";

import { DateFormatting } from "@food/shared-functions";
import { Client } from "@food/shared-types";

import DefaultImage from "assets/images/default-profile-image.png";

import RoundedText from "components/atoms/RoundedText";
import ButtonRounded from "components/atoms/ButtonRounded";
import ClientRowTableGrid from "components/atoms/ClientRowTableGrid";

type ClientsTableRowProps = {
  client: Client;
};

const ClientsTableRow = ({ client }: ClientsTableRowProps) => {
  return (
    <ClientRowTableGrid>
      <S.ImageTable>
        <S.CellBar />
        <S.ImageContainer>
          <S.Image>
            <img src={client.profileImage.url || DefaultImage} alt="" />
          </S.Image>
        </S.ImageContainer>
      </S.ImageTable>

      <S.NameTable>
        <S.NameContainer>
          <S.ContentTable bold="bold" color="black-light">
            {client.fullName}
          </S.ContentTable>
        </S.NameContainer>
      </S.NameTable>

      <S.EmailTable>
        <Icon
          size="small-medium"
          type={
            client.authenticationType === "email" ? IoAtOutline : IoLogoGoogle
          }
        />
      </S.EmailTable>

      <S.DateTable>
        <S.DateContainer>
          <RoundedText bgColor="blue" size="extra_small">
            {DateFormatting.applyFormat(client.createdAt.toDate())}
          </RoundedText>
        </S.DateContainer>
      </S.DateTable>

      <S.PuntuactionTable>
        <S.ContentTable bold="semi-bold" color="black-light">
          {client.puntuaction.store.length}
        </S.ContentTable>
      </S.PuntuactionTable>

      <S.ButtonTable>
        <ButtonRounded text="Ver perfil" />
      </S.ButtonTable>
    </ClientRowTableGrid>
  );
};

export default ClientsTableRow;
