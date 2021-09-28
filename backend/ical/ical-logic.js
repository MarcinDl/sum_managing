const ical = require('node-ical');
const path = require('path')


const events = ical.sync.parseFile(path.resolve('./ical/calendar-106.ics'));
let allEvents;
// loop through events and log them
for (const event of Object.values(events)) {
    console.log(
        'Summary: ' + event.summary +
        '\nDescription: ' + event.description +
        '\nStart Date: ' + event.start +
        '\nStart Date: ' + event.end +
        '\n'
    );

    // allEvents += `Początek ${event.start}\, 
    //             koniec: ${event.end}`;

    allEvents += {
        'Summary: ' : event.summary,
        'Description: ' : event.description,
        'Start Date: ' : event.start,
        'Start Date: ' : event.end};
};


module.exports = {
    allEvents
}
