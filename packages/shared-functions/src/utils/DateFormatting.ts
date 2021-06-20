class DateFormatting {
  public static applyFormat = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(date);

    return formatter;
  };
}

export default DateFormatting;
