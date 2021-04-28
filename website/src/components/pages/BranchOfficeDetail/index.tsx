import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import NavigationBar from "components/organisms/NavigationBar";
import ParallaxImage from "components/atoms/ParallaxImage";

const BranchOfficeDetail: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <ParallaxImage
      styles={{ size: "small" }}
      src="https://s3.amazonaws.com/semanaeconomica.bucket/semanaeconomica2/articles/banner/2817_1571497931_banner.jpg"
    />
  </div>
);

export default BranchOfficeDetail;
