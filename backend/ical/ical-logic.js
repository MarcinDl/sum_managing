const ical = require('node-ical');

function allEvents() {
    return new Promise((resolve, reject) => {
        ical.fromURL('http://www.cdism.sum.edu.pl/ics/calendar-106.ics', {}, function (err, data) {
            // console.log(data)
            let today = new Date();

            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            let dates;
            today = mm + '/' + dd + '/' + yyyy;
            for(let re in data){
                console.log(data[re].end.toLocaleDateString())
                dates += data[re].end.toLocaleDateString();
            }

            console.log("today",today)

            resolve(dates)
        });
    })
}

module.exports = {
    allEvents: allEvents
}

