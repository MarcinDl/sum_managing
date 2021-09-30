const ical = require('node-ical');

function allEvents() {
    return new Promise((resolve, reject) => {
        ical.fromURL('http://www.cdism.sum.edu.pl/ics/calendar-106.ics', {}, function (err, data) {
            console.log(data)
            resolve(data)
        });
    })
}

module.exports = {
    allEvents: allEvents
}

