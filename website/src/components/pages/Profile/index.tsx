import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/organisms/ProfileLeftContent";

const Profile: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <S.ColumnContainer>
      <ProfileLeftContent />
    </S.ColumnContainer>
  </div>
);

export default Profile;
