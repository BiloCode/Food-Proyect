import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type SucursalInformationProps = {
  TextTittle: string;
  TextDescription: string;
  Stars: StarsType;
};

const SucursalInformation = ({
  TextTittle,
  TextDescription,
  Stars,
}: SucursalInformationProps) => {
  const StarsArray = [1, 2, 3, 4, 5];

  console.log(
    StarsArray.map((v, i) => {
      if (v > Stars) {
        return <Icon key={i} color="yellow" Type={IoIosStarOutline} />;
      }
    })
  );

  return (
    <S.SucursalInformationContainer>
      <Title color="black" size="extra_small">
        {TextTittle}
      </Title>
      <S.SucursalDescriptionContainer>
        <Description color="black" size="small">
          {TextDescription}
        </Description>
      </S.SucursalDescriptionContainer>
      <div>
        {StarsArray.map((v, i) => {
          if (v <= Stars) {
            return <Icon key={i} color="yellow" Type={IoIosStar} />;
          }
        })}
        {StarsArray.map((v, i) => {
          if (v > Stars) {
            return <Icon key={i} color="yellow" Type={IoIosStarOutline} />;
          }
        })}
      </div>
    </S.SucursalInformationContainer>
  );
};

export default SucursalInformation;
