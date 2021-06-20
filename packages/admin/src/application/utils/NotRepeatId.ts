class NotRepeatId {
  public static exec = (ids: string[]): string[] => {
    const notRepeatFoodsId = ids.reduce((prev, current) => {
      if (!prev.includes(current)) {
        prev.push(current);
      }

      return prev;
    }, []);

    return notRepeatFoodsId;
  };
}

export default NotRepeatId;
