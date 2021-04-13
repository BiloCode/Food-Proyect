import HomeInformation from "components/molecules/HomeInformation";
import * as S from "./styles";

const HomeInformationContainer = () => {
  return (
    <S.HomeInformationContainer>
      <HomeInformation
        textTittle="Tenemos la mejor comida del pais"
        textDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        color="black"
        orientation="right"
      />
    </S.HomeInformationContainer>
  );
};

export default HomeInformationContainer;
