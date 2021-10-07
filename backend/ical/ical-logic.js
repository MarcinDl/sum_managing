const ical = require('node-ical');

function allEvents() {
    return new Promise((resolve, reject) => {
        ical.fromURL('http://www.cdism.sum.edu.pl/ics/calendar-106.ics', {}, function (err, data) {
            // console.log(data)
            let today = new Date();

            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            let dates = [];
            today = dd + '/' + mm + '/' + yyyy;
            for(let re in data){
                // console.log(data[re])
                // console.log(data[re].end.toLocaleDateString())
                // dates += today ==data[re].end.toLocaleDateString();
                // console.log(data[re].end.toLocaleDateString())
                if (today == data[re].end.toLocaleDateString()){
                    
                    dates.push(data[re].end.toLocaleDateString());
                    // console.log("dates",dates)
                } 
            }
            // console.log(dates)
            console.log("today",today)

            resolve(dates)
        });
    })
}

module.exports = {
    allEvents: allEvents
}

