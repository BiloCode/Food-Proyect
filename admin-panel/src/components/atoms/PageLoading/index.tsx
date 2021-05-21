import * as S from "./styles";

import Spinner from "../Spinner";

const PageLoading = () => (
  <S.LoadingContainer>
    <Spinner size="big" />
  </S.LoadingContainer>
);

export default PageLoading;
