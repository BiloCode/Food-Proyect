import * as S from "./styles";

import Portals from "components/atoms/Portals";
import Spinner from "components/atoms/Spinner";
import DarkScreen from "components/atoms/DarkScreen";

import { useAtomValue } from "jotai/utils";
import { screenLoader } from "store/screenLoader";

const FullScreenLoader = () => {
  const loader = useAtomValue(screenLoader);

  if (!loader.active) return null;

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.ContainerElements>
            <Spinner size="extra-big" color="white" />
            <S.Message>{loader.message}</S.Message>
          </S.ContainerElements>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default FullScreenLoader;
