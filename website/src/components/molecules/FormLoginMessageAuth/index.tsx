import * as S from "./styles";

import useGoogleAuthentication from "hooks/useGoogleAuthentication";

const FormLoginMessageAuth = () => {
  const { onClickGoggleAction } = useGoogleAuthentication();

  return (
    <S.BottomMessage>
      Registrate con google
      <span onClick={onClickGoggleAction}> presionando aqui.</span>
    </S.BottomMessage>
  );
};

export default FormLoginMessageAuth;
