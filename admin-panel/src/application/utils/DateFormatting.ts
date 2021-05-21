class DateFormatting {
  public static applyFormat = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);

    return formatter;
  };
}

export default DateFormatting;
