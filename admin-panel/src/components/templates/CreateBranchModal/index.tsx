import * as S from "./styles";

import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import Title from "components/atoms/Title";
import CreateBranchForm from "components/organisms/CreateBranchForm";

const CreateBranchModal = () => {
  return (
    <Portals>
      <DarkScreen>
        <S.Container>
          <S.ModalContainer>
            <S.TitleContainer>
              <Title color="blue">Crear nueva sucursal</Title>
            </S.TitleContainer>
            <CreateBranchForm />
          </S.ModalContainer>
        </S.Container>
      </DarkScreen>
    </Portals>
  );
};

export default CreateBranchModal;
