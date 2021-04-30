type StarType = "fill" | "empty";

const useStarIconFormat = (starNumber: number) => {
  return () => {
    let starsType: StarType[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < starNumber) {
        starsType.push("fill");
        continue;
      }

      starsType.push("empty");
    }

    return starsType;
  };
};

export default useStarIconFormat;
