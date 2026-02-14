// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.

export function getMonthNumber(monthName) {
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  return months.indexOf(monthName);
}

export function getWeekdayNumber(dayName) {
  return {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }[dayName];
}

export function calculateCommemorationDate(
  year,
  monthName,
  dayName,
  occurrence
) {
  const month = getMonthNumber(monthName);
  const weekday = getWeekdayNumber(dayName);

  if (occurrence === "last") {
    let date = new Date(year, month + 1, 0, 12);
    while (date.getDay() !== weekday) {
      date.setDate(date.getDate() - 1);
    }
    return date.getDate();
  }

  const n = { first: 1, second: 2, third: 3, fourth: 4 }[occurrence];
  const firstDay = new Date(year, month, 1, 12);
  const offset = (weekday - firstDay.getDay() + 7) % 7;

  return 1 + offset + 7 * (n - 1);
}