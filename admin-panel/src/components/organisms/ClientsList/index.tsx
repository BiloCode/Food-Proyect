import Description from "components/atoms/Description";
import * as S from "./styles";

const ClientsList = () => {
  return (
    <S.Container>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        Image
      </Description>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        Nombre completo
      </Description>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        Email
      </Description>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        Fecha de creacion
      </Description>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        Puntuaciones
      </Description>
      <Description size="small" color="gray" bold="semi-bold" uppercase>
        *
      </Description>
    </S.Container>
  );
};
export default ClientsList;
