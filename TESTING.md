# Testing Documentation

## How We Tested Each Rubric Point

### Requirements for Everyone

#### Calendar displays current month on load
**Testing method:** Manual testing
- Opened the deployed site at https://project-day-calendar.netlify.app/
- Verified the calendar shows February 2025 (current month at time of testing)
- Confirmed the title displays "February 2025"

#### Calendar shows 7 columns (Sun-Sat) with Sunday first
**Testing method:** Manual testing
- Inspected the table header
- Verified columns are ordered: Sun, Mon, Tue, Wed, Thu, Fri, Sat
- Confirmed Sunday is the first column

#### Previous/Next buttons work
**Testing method:** Manual testing
- Clicked Previous button multiple times
- Clicked Next button multiple times
- Verified month changes correctly each time
- Confirmed buttons work across year boundaries (e.g., Dec 2024 → Jan 2025)

#### Jump to specific month/year works
**Testing method:** Manual testing
- Selected "October" from month dropdown
- Selected "2024" from year dropdown
- Clicked "Go" button
- Verified calendar jumped to October 2024

#### Commemorative days display correctly
**Testing method:** Unit tests in `common.test.mjs` + Manual verification
- Unit tests verify date calculations for all occurrence types (first, second, third, fourth, last)
- Manually tested October 2024: Ada Lovelace Day appears on Oct 8
- Manually tested October 2024: World Lemur Day appears on Oct 25
- Manually tested October 2020: Ada Lovelace Day appears on Oct 13
- Manually tested October 2020: World Lemur Day appears on Oct 30
- Manually tested May 2030: International Binturong Day appears on May 11

#### Calendar works for all years
**Testing method:** Manual testing + Unit tests in `common.test.mjs`
- Tested years: 1900, 1950, 2000, 2024, 2050, 2100
- Unit tests verify calculations work across different years
- All commemorative days appeared correctly in tested years

#### Dynamic (works if JSON changes)
**Testing method:** Code review
- Reviewed `web.mjs` - uses `daysData.forEach()` to iterate through JSON
- No hard-coded day names or logic
- System would automatically handle new days added to JSON

#### Previous/Next work beyond selector limits
**Testing method:** Manual testing
- Year selector goes 1900-2100
- Clicked Previous from January 1900 - correctly showed December 1899
- Clicked Next from December 2100 - correctly showed January 2101
- No errors or undefined values displayed

#### Calendar grid structure matches rubric
**Testing method:** Manual testing of specific months
- October 2024: 5 rows × 7 columns, first row Tue-Sun, last row Mon-Thu
- December 2024: Sunday start (no empty before), Tuesday end (4 empty after)
- February 2025: Saturday start (6 empty before), Friday end (1 empty after)
- May 2025: Thursday start (4 empty before), Saturday end (no empty after)
- February 2026: Sunday start (no empty before), Saturday end (no empty after)

#### Lighthouse accessibility 100%
**Testing method:** Chrome Lighthouse
- Ran Lighthouse on deployed site
- Accessibility score: 100%
- All accessibility audits passed

#### Unit tests exist
**Testing method:** `npm test`
- 15 unit tests in `common.test.mjs`
- All tests pass
- Tests cover: `getMonthNumber`, `getWeekdayNumber`, `calculateCommemorationDate` for all occurrence types

---

### Requirements for Groups of 2+

#### Generate days.ics file
**Testing method:** Command line execution
- Ran `npm run generate-ical`
- Confirmed `days.ics` file created
- File contains 55 events (5 days × 11 years)

#### iCal file works in Google Calendar
**Testing method:** Google Calendar import
- Created test calendar in Google Calendar
- Imported days.ics file
- Message: "Imported 55 out of 55 events"
- Verified dates:
  - Oct 8, 2024: Ada Lovelace Day ✓
  - Oct 25, 2024: World Lemur Day ✓
  - Oct 13, 2020: Ada Lovelace Day ✓
  - Oct 30, 2020: World Lemur Day ✓
  - May 11, 2030: International Binturong Day ✓

#### Events are all-day (no times)
**Testing method:** Google Calendar inspection
- Clicked on imported events in Google Calendar
- Confirmed all events show "All day"
- No start/end times displayed

#### Shared logic between web and iCal
**Testing method:** Code review
- Both `web.mjs` and `generate-ical.mjs` import from `common.mjs`
- `calculateCommemorationDate` function used by both
- `getMonthNumber` function used by both
- No duplicated date calculation logic

---

## Test Execution

All tests can be run with:
```bash
npm install
npm test
```

All 15 tests pass successfully.