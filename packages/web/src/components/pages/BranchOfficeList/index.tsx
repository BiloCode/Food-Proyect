import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Slider from "components/molecules/Slider";
import Footer from "components/organisms/Footer";
import PageLimiter from "components/atoms/PageLimiter";
import NavigationBar from "components/organisms/NavigationBar";
import BranchCardList from "components/molecules/BranchCardList";
import BranchOfficeFilter from "components/organisms/BranchOfficeFilter";
import useBranchOfficeList from "hooks/useBranchOfficeList";

const images = [
  "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/comida-arabe.jpg",
  "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg",
];

const BranchOfficeList = (_: RouteComponentProps) => {
  const { listWithFilter, onFilterChange } = useBranchOfficeList();

  return (
    <>
      <NavigationBar />
      <Slider images={images} />
      <PageLimiter>
        <S.ContainerElements>
          <BranchOfficeFilter onClickOption={onFilterChange} />
          <BranchCardList list={listWithFilter} />
        </S.ContainerElements>
      </PageLimiter>
      <Footer />
    </>
  );
};

export default BranchOfficeList;
