type StarType = "fill" | "empty";

const useStarIconFormat = (starNumber: number) => {
  return () => {
    let number: StarType[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < starNumber) {
        number.push("fill");
        continue;
      }

      number.push("empty");
    }

    return number;
  };
};

export default useStarIconFormat;
