const ical = require('node-ical');
const path = require('path')


const events = ical.sync.parseFile(path.resolve('./ical/calendar-106.ics'));


let allEvents = [];
// loop through events and log them
for (const event of Object.values(events)) {
    console.log(
        'Summary: ' + event.summary +
        '\nStart Date: ' + event.start +
        '\nStart Date: ' + event.end +
        '\n'
    );

    allEvents.push({
        'summary': event.summary, 
        'start' : event.start, 
        'end' : event.end }) ;

    // allEvents += 
    //    { 'Summary: ' : event.summary,
    //     'Start Date: ' + event.start,
    //     'Start Date: ' + event.end}
    
};


module.exports = {
    allEvents
}
