import * as S from "./styles";

import Span from "components/atoms/Span";
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
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            Imagen
          </Span>
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            Nombre completo
          </Span>
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            Email
          </Span>
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            Fecha de creacion
          </Span>
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            Puntuaciones
          </Span>
          <Span
            size="extra_small"
            color="gray"
            bold="semi-bold"
            align="center"
            uppercase
          >
            *
          </Span>
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
                <Span
                  align="center"
                  bold="semi-bold"
                  color="black-light"
                  size="small"
                >
                  {v.fullName}
                </Span>
              </S.NameContainer>
            </S.NameTable>

            <S.EmailTable>
              {v.authenticationType === "email" && (
                <Icon size="small-medium" type={IoAtOutline} />
              )}
              {v.authenticationType === "google" && (
                <Icon size="small-medium" type={IoLogoGoogle} />
              )}
            </S.EmailTable>

            <S.DateTable>
              <S.DateContainer>
                <RoundedText bgColor="blue">
                  <Span color="white" size="extra_small" bold="bold">
                    {DateFormatting.applyFormat(v.createdAt.toDate())}
                  </Span>
                </RoundedText>
              </S.DateContainer>
            </S.DateTable>

            <S.PuntuactionTable>
              <Span bold="semi-bold" size="small" color="black-light">
                {v.puntuaction.store.length}
              </Span>
            </S.PuntuactionTable>

            <S.ButtonTable>
              <ButtonRounded text="Ver perfil" bgColor="white">
                <Span uppercase bold="bold" color="gray">
                  Ver perfil
                </Span>
              </ButtonRounded>
            </S.ButtonTable>
          </S.RowTable>
        ))}
      </S.Container>
    </div>
  );
};
export default ClientsList;
