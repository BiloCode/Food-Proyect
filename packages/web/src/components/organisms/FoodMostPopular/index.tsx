import * as S from "./styles";

import PageLimiter from "components/atoms/PageLimiter";
import { Button, Paragraph, Title } from "@food/components";
import FoodCard from "components/molecules/FoodCard";

const FoodMostPopular = () => (
  <S.MostPopular>
    <PageLimiter>
      <S.Content>
        <S.HeadContent>
          <S.TextContent>
            <Title weight="black" color="white">
              Nuestra comida mas popular
            </Title>
            <Paragraph regular color="white">
              Disfruta de estas comidas al mejor precio{" "}
            </Paragraph>
          </S.TextContent>
          <Button styles={{ color: "yellow" }} text="Ver nuestras sucursales" />
        </S.HeadContent>
        <S.FoodList>
          {new Array(4).fill("").map((v) => (
            <FoodCard
              discount={10}
              image="https://static1.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--620x349@abc.jpg"
              button={{ onClick: () => null }}
            />
          ))}
        </S.FoodList>
      </S.Content>
    </PageLimiter>
  </S.MostPopular>
);

export default FoodMostPopular;
