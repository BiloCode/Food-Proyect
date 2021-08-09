import * as S from "./styles";

import contactImage from "assets/images/contact.png";
import { IoMdCall, IoIosAt, IoIosPin } from "react-icons/io";
import Description from "components/atoms/Description";
import useGetBranchOfficeDetail from "hooks/useGetBranchOfficeDetail";

import { Image, Icon, Title } from "@food-proyect/shared-components";

const ContactInformation = () => {
  const {
    branchOffice: { data },
  } = useGetBranchOfficeDetail();

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={contactImage} />
      </S.ImageContainer>
      <S.ContactData>
        <S.Data>
          <Icon color="blue" type={IoMdCall} />
          <Title size="small" color="blue">
            Teléfono:
          </Title>
          <Description color="blue" size="small">
            {data?.phoneNumber}
          </Description>
        </S.Data>
        <S.Data>
          <Icon color="blue" type={IoIosAt} />
          <Title size="small" color="blue">
            Correo:
          </Title>
          <Description color="blue" size="small">
            {data?.email}
          </Description>
        </S.Data>
        <S.Data>
          <Icon color="blue" type={IoIosPin} />
          <Title size="small" color="blue">
            Ubicación:
          </Title>
          <Description color="blue" size="small">
            {data?.location.address}
          </Description>
        </S.Data>
      </S.ContactData>
    </S.Container>
  );
};

export default ContactInformation;
