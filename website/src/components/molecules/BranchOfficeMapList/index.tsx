import faker from "faker";
import * as S from "./styles";

import BranchOfficeMapItem from "../BranchOfficeMapItem";

const BranchOfficeMapList = () => {
  const fakeMap = new Array(10).fill("");

  return (
    <S.Container>
      {fakeMap.map((_, i) => (
        <BranchOfficeMapItem
          key={i}
          tittle={faker.random.words(2)}
          text={faker.lorem.words(10)}
          image={faker.random.image()}
          latitude={-12.008734979054598}
          length={-76.82457079149549}
          stars={3}
        />
      ))}
    </S.Container>
  );
};

export default BranchOfficeMapList;
