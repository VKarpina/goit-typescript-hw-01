enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

type Bool = (day: DayOfWeek) => string;
const isWeekend: Bool = (day) => {
  if (day === "Saturday" || day === "Sunday") {
    return `Today is weekend`;
  } else {
    return `Today is working day`;
  }
};

console.log(isWeekend(DayOfWeek.Friday));
