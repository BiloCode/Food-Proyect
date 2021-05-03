import BranchOfficeMapItem from "../BranchOfficeMapItem";
import * as S from "./styles";
import image from "assets/images/BranchOfficeBembos.jpg";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeTypes = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

type BranchOfficeMapListProps = {
  onClickBranchOffice({}: BranchOfficeTypes): void;
};

const BranchOfficeMapList = ({
  onClickBranchOffice,
}: BranchOfficeMapListProps) => {
  return (
    <S.Container>
      <BranchOfficeMapItem
        tittle="Sucursal Huaycan"
        text="Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.008734979054598,
            length: -76.82457079149549,
            tittle: "Sucursal Huaycan",
            text: "Sucursal Huaycan lorem imptusm lorem imptusm lorem imptusm",
            stars: 2,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Mega Plaza"
        text="Sucursal 2"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -11.992700403536038,
            length: -77.05174180025324,
            tittle: "Sucursal Mega Plaza",
            text:
              "Sucursal Mega Plaza lorem imptusm lorem imptusm lorem imptusm",
            stars: 3,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
      <BranchOfficeMapItem
        tittle="Sucursal Plaza Norte"
        text="Sucursal 3"
        image={image}
        onClick={() =>
          onClickBranchOffice({
            latitude: -12.00687445636363,
            length: -77.05816660531731,
            tittle: "Sucursal Plaza Norte",
            text:
              "Sucursal Plaza Norte lorem imptusm lorem imptusm lorem imptusm",
            stars: 4,
          })
        }
      />
    </S.Container>
  );
};

export default BranchOfficeMapList;
