import Icon from "components/atoms/Icon";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const useStarsRecibed = (Stars: number) => {
  return () => {
    let auxiliar = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Stars) {
        auxiliar.push(
          <Icon key={i} color="yellow" Type={IoIosStar} size="small" />
        );
      } else {
        auxiliar.push(
          <Icon key={i} color="yellow" Type={IoIosStarOutline} size="small" />
        );
      }
    }
    return auxiliar;
  };
};

export default useStarsRecibed;
