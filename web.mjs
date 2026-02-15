// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import daysData from "./days.json" with { type: "json" };
import { calculateCommemorationDate } from "./common.mjs";

const body = document.getElementById("calendar-body");
const title = document.getElementById("title");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

let current = new Date();

function setupSelectors() {
  monthNames.forEach((m, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = m;
    monthSelect.appendChild(option);
  });

  for (let y = 1900; y <= 2100; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
  }
}

function render(month, year) {
  body.innerHTML = "";
  title.textContent = `${monthNames[month]} ${year}`;

  monthSelect.value = month;
  yearSelect.value = year;

  const firstDay = new Date(year, month, 1, 12).getDay();
  const daysInMonth = new Date(year, month + 1, 0, 12).getDate();

  let day = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if ((i === 0 && j < firstDay) || day > daysInMonth) {
        cell.textContent = "";
      } else {
        cell.textContent = day;

        daysData.forEach(d => {
          const match = calculateCommemorationDate(
            year,
            d.monthName,
            d.dayName,
            d.occurrence
          );

          if (match === day && month === monthNames.indexOf(d.monthName)) {
            cell.appendChild(document.createElement("br"));
            cell.append(d.name);
          }
        });

        day++;
      }

      row.appendChild(cell);
    }

    body.appendChild(row);
    if (day > daysInMonth) break;
  }
}

document.getElementById("prev").onclick = () => {
  current.setMonth(current.getMonth() - 1);
  render(current.getMonth(), current.getFullYear());
};

document.getElementById("next").onclick = () => {
  current.setMonth(current.getMonth() + 1);
  render(current.getMonth(), current.getFullYear());
};

document.getElementById("go").onclick = () => {
  current = new Date(yearSelect.value, monthSelect.value, 1);
  render(current.getMonth(), current.getFullYear());
};

setupSelectors();
render(current.getMonth(), current.getFullYear());