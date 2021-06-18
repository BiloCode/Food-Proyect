import { PuntuactionType } from "application/types/BranchOfficeModelType";

class StarsPromedy {
  public static exec(puntuactions: PuntuactionType[]) {
    const stars = puntuactions.reduce((prev, next) => prev + next.stars, 0);

    return stars / puntuactions.length;
  }
}

export default StarsPromedy;
