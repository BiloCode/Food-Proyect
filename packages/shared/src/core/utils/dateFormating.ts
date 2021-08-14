function dateFormating(date: Date) {
  const formater = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(date);

  return formater;
}

export default dateFormating;
