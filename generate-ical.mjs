// This is a placeholder file which shows how you can access functions and data defined in other files. You can delete the contents of the file once you have understood how it works.
// It can be run with `node`.

// generate-ical.mjs
// Run with: node generate-ical.mjs
// Generates days.ics for years 2020–2030 (inclusive)

import fs from "fs";
import daysData from "./days.json" with { type: "json" };
import { calculateCommemorationDate, getMonthNumber } from "./common.mjs";

const START_YEAR = 2020;
const END_YEAR = 2030;

function formatDate(year, month, day) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}${mm}${dd}`;
}

function getCurrentTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

let ics = "";
ics += "BEGIN:VCALENDAR\n";
ics += "VERSION:2.0\n";
ics += "PRODID:-//Days Calendar//EN\n";

const timestamp = getCurrentTimestamp();

for (let year = START_YEAR; year <= END_YEAR; year++) {
  for (const day of daysData) {
    const month = getMonthNumber(day.monthName);
    const date = calculateCommemorationDate(
      year,
      day.monthName,
      day.dayName,
      day.occurrence
    );

    const formattedDate = formatDate(year, month, date);
    
    const nextDay = new Date(year, month, date + 1, 12);
    const endDate = formatDate(
      nextDay.getFullYear(),
      nextDay.getMonth(),
      nextDay.getDate()
    );

    ics += "BEGIN:VEVENT\n";
    ics += `UID:${day.name.replace(/\s+/g, "-")}-${year}@days-calendar\n`;
    ics += `DTSTAMP:${timestamp}\n`;
    ics += `DTSTART;VALUE=DATE:${formattedDate}\n`;
    ics += `DTEND;VALUE=DATE:${endDate}\n`;
    ics += `SUMMARY:${day.name}\n`;
    ics += "END:VEVENT\n";
  }
}

ics += "END:VCALENDAR\n";

fs.writeFileSync("days.ics", ics);
console.log("Generated days.ics");