class ValuesEmpty {
  public static validate(...params: string[]) {
    for (let param of params) {
      let formattedParam = param.trim();
      if (!formattedParam) {
        return true;
      }
    }

    return false;
  }
}

export default ValuesEmpty;
