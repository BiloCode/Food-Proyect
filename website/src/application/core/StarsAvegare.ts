import { PuntuactionType } from "application/types/BranchOfficeModelType";

class StarsAverage {
  public static exec(puntuactions: PuntuactionType[]) {
    let starsAccumulate = 0;
    for (let puntuaction of puntuactions) {
      starsAccumulate += puntuaction.stars;
    }

    const stars = Math.floor(starsAccumulate / puntuactions.length);

    return stars;
  }
}

export default StarsAverage;
