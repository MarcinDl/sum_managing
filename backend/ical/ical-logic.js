const ical = require('node-ical');

function allEvents() {
    return new Promise((resolve, reject) => {
        ical.fromURL('http://www.cdism.sum.edu.pl/ics/calendar-106.ics', {}, function (err, dataFromICS) {
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;

            let lecturesInfo = [];

            for(let singleData in dataFromICS){
                // console.log(dataFromICS[singleData])
                if (today == dataFromICS[singleData].end.toLocaleDateString()){
                    let singleLectureInfo = {
                        summary: dataFromICS[singleData].summary,
                        startDate: dataFromICS[singleData].start.toLocaleDateString(),
                        endDate: dataFromICS[singleData].end.toLocaleDateString(),
                        startTime: dataFromICS[singleData].start.getHours() + ":" + dataFromICS[singleData].start.getMinutes(),
                        endTime: dataFromICS[singleData].end.getHours() + ":" + dataFromICS[singleData].end.getMinutes(),
                        openingHours: dataFromICS[singleData].start.getHours(),
                        openingMinutes: dataFromICS[singleData].start.getMinutes(),
                        closingHours: dataFromICS[singleData].end.getHours(),
                        closingMinutes: dataFromICS[singleData].end.getMinutes()
                    }
                    lecturesInfo.push(singleLectureInfo)
                    console.log(lecturesInfo)
                } 
            }
            console.log("today",today)

            resolve(lecturesInfo)
        });
    })
}

module.exports = {
    allEvents: allEvents
}

