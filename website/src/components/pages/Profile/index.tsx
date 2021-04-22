import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/organisms/ProfileLeftContent";
import ProfileRightContent from "components/organisms/ProfileRightContent";

const Profile: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <S.ColumnContainer>
      <ProfileLeftContent />
      <ProfileRightContent />
    </S.ColumnContainer>
  </div>
);

export default Profile;
