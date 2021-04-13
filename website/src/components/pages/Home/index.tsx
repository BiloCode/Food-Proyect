import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "components/atoms/Button";

const Home: FC<RouteComponentProps> = () => (
  <div>
    <h1>Homepage</h1>
    <Button text="Iniciar sesion" />
  </div>
);

export default Home;
