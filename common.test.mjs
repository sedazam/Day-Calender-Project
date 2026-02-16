import { calculateCommemorationDate, getMonthNumber, getWeekdayNumber } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("getMonthNumber returns correct index for January", () => {
  assert.equal(getMonthNumber("January"), 0);
});

test("getMonthNumber returns correct index for December", () => {
  assert.equal(getMonthNumber("December"), 11);
});

test("getWeekdayNumber returns correct index for Sunday", () => {
  assert.equal(getWeekdayNumber("Sunday"), 0);
});

test("getWeekdayNumber returns correct index for Saturday", () => {
  assert.equal(getWeekdayNumber("Saturday"), 6);
});

test("Ada Lovelace Day 2024 - second Tuesday of October", () => {
  const result = calculateCommemorationDate(2024, "October", "Tuesday", "second");
  assert.equal(result, 8);
});

test("Ada Lovelace Day 2025 - second Tuesday of October", () => {
  const result = calculateCommemorationDate(2025, "October", "Tuesday", "second");
  assert.equal(result, 14);
});

test("Ada Lovelace Day 2020 - second Tuesday of October", () => {
  const result = calculateCommemorationDate(2020, "October", "Tuesday", "second");
  assert.equal(result, 13);
});

test("World Lemur Day 2024 - last Friday of October", () => {
  const result = calculateCommemorationDate(2024, "October", "Friday", "last");
  assert.equal(result, 25);
});

test("World Lemur Day 2020 - last Friday of October", () => {
  const result = calculateCommemorationDate(2020, "October", "Friday", "last");
  assert.equal(result, 30);
});

test("International Vulture Awareness Day 2024 - first Saturday of September", () => {
  const result = calculateCommemorationDate(2024, "September", "Saturday", "first");
  assert.equal(result, 7);
});

test("International Red Panda Day 2024 - third Saturday of September", () => {
  const result = calculateCommemorationDate(2024, "September", "Saturday", "third");
  assert.equal(result, 21);
});

test("Fourth Monday of January 2024", () => {
  const result = calculateCommemorationDate(2024, "January", "Monday", "fourth");
  assert.equal(result, 22);
});

test("International Binturong Day 2030 - second Saturday of May", () => {
  const result = calculateCommemorationDate(2030, "May", "Saturday", "second");
  assert.equal(result, 11);
});

test("First Sunday when month starts on Sunday", () => {
  const result = calculateCommemorationDate(2024, "September", "Sunday", "first");
  assert.equal(result, 1);
});

test("Last Saturday in February 2025", () => {
  const result = calculateCommemorationDate(2025, "February", "Saturday", "last");
  assert.equal(result, 22);
});