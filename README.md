# Days Calendar Project

Hey! This is our Days Calendar project for CodeYourFuture. We built a calendar that shows special commemorative days throughout the year - like Ada Lovelace Day and World Lemur Day.

## What it does

The calendar loads up showing the current month, and you can click around to explore different months and years. When there's a special day in that month, it shows up right in the calendar. Pretty cool, right?

We also made it so you can export all these days to your Google Calendar if you want to keep track of them there too.

## How we built it

We used vanilla JavaScript to keep things simple and focused on the fundamentals. The trickiest part was definitely getting the date calculations right - figuring out things like "the second Tuesday of October" for any given year took some work!

We made sure everything is shared between the web calendar and the iCal generator, so we're not repeating ourselves. Both use the same logic from `common.mjs`.

## Running it yourself

If you want to run this locally:

1. Clone this repo to your machine
2. You'll need to serve it over HTTP (browsers don't like modules with file:// URLs). We used `http-server`:
```bash
   npm install -g http-server
   http-server
```
3. Then just open http://localhost:8080 in your browser

## Testing

We wrote tests to make sure our date calculations work properly:
```bash
npm test
```

If you want to generate the iCal file yourself:
```bash
npm run generate-ical
```

This creates a `days.ics` file you can import into Google Calendar or any other calendar app.

## The Files

- `index.html` - The main page with our calendar
- `web.mjs` - Handles rendering the calendar and user interactions
- `common.mjs` - The shared date calculation logic
- `generate-ical.mjs` - Creates the iCal file
- `common.test.mjs` - Our tests to make sure everything works
- `days.json` - The data about which days to show

## Things we learned

- Working with dates is harder than it looks! Daylight saving time is sneaky.
- Writing tests first actually made debugging way easier
- The iCal format is pretty straightforward once you understand it
- Getting to 100% on Lighthouse accessibility was really satisfying

## Check it out

We deployed it on Netlify: https://project-day-calendar.netlify.app/

Feel free to click around and explore different months!

## Built by

- sidicamoli 'Mohamed Ibrahim Mohamed'
- sedazam 'Seddiq Azam'

We worked on this together as part of our CodeYourFuture coursework. It was a great learning experience!

---

Thanks for checking out our project! 