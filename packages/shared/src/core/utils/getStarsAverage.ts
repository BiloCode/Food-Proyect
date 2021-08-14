import { PuntuactionType } from "../types";

function getStarsAverage(puntuactions: PuntuactionType[]) {
  const stars = puntuactions.reduce((prev, next) => prev + next.stars, 0);

  return stars / puntuactions.length;
}

export default getStarsAverage;
