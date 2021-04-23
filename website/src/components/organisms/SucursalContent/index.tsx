import SucursalInformationContainer from "components/molecules/SucursalInformation";
import faker from "faker";
import * as S from "./styles";

const SucursalContent = () => {
  return (
    <S.SucursalContentContainer>
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={4}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={3}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={5}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={1}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={2}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={3}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={4}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={2}
      />
      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={1}
      />

      <SucursalInformationContainer
        TextTittle="Sucursal Megaplaza - av. 145"
        TextDescription={faker.lorem.words(20)}
        Stars={0}
      />
    </S.SucursalContentContainer>
  );
};

export default SucursalContent;
