import BranchOfficeInformation from "components/molecules/BranchOfficeInformation";
import faker from "faker";
import * as S from "./styles";

import image from "assets/images/BranchOfficeBembos.jpg";

const BranchOfficeContent = () => {
  return (
    <S.Container>
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={5}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={4}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />

      <BranchOfficeInformation
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={0}
      />
    </S.Container>
  );
};

export default BranchOfficeContent;
