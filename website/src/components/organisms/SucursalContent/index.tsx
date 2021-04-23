import SucursalInformationContainer from "components/molecules/SucursalInformation";
import faker from "faker";
import * as S from "./styles";

import image from "assets/images/BranchOfficeBembos.jpg";

const SucursalContent = () => {
  return (
    <S.SucursalContentContainer>
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={5}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={4}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />

      <SucursalInformationContainer
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={0}
      />
    </S.SucursalContentContainer>
  );
};

export default SucursalContent;
