import * as S from "./styles";

import contactImage from "assets/images/contact.png";
import Icon from "components/atoms/Icon";
import { IoMdCall, IoIosAt, IoIosPin } from "react-icons/io";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import useGetBranchOfficeDetail from "hooks/useGetBranchOfficeDetail";

const ContactInformation = () => {
  const {
    branchOffice: { data, uAuthPuntuaction },
  } = useGetBranchOfficeDetail();

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={contactImage} alt="" />
      </S.ImageContainer>
      <S.ContactData>
        <S.Data>
          <Icon color="blue" Type={IoMdCall} />
          <Title size="small" color="blue" lowercase>
            Telefono:
          </Title>
          <Description color="blue" size="small">
            {data?.phoneNumber}
          </Description>
        </S.Data>
        <S.Data>
          <Icon color="blue" Type={IoIosAt} />
          <Title size="small" color="blue" lowercase>
            Correo:
          </Title>
          <Description color="blue" size="small">
            contacto@bembos.com
          </Description>
        </S.Data>
        <S.Data>
          <Icon color="blue" Type={IoIosPin} />
          <Title size="small" color="blue" lowercase>
            Ubicacion:
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