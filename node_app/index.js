const ical = require('node-ical');

const events = ical.sync.parseFile('calendar-106.ics');

for (const event of Object.values(events)) {
    console.log(event)
    // console.log(
    //     'Summary: ' + event.summary +
    //     '\nDescription: ' + event.description +
    //     '\n'
    // );
};