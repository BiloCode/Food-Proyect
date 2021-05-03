import BranchOfficeInformation from "components/molecules/BranchOfficeInformation";
import faker from "faker";
import * as S from "./styles";

import image from "assets/images/BranchOfficeBembos.jpg";
import { useNavigate } from "@reach/router";

const BranchOfficeContent = () => {
  const navigate = useNavigate();

  const onCLickBranchOffice = (id: "string") =>
    navigate(`/branch-office/${id}`);

  // Eso de abajo sera un map, esta de pruebita no mas v:

  return (
    <S.Container>
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"1"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"2"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"3"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={5}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"4"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"5"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"6"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={3}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"7"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={4}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"8"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={2}
      />
      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"9"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={1}
      />

      <BranchOfficeInformation
        onCLick={onCLickBranchOffice}
        id={"10"}
        image={image}
        textTittle="Sucursal Megaplaza - av. 145"
        textDescription={faker.lorem.words(20)}
        stars={0}
      />
    </S.Container>
  );
};

export default BranchOfficeContent;
