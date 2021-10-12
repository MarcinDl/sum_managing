const ical = require('node-ical');

// const room106 = "http://www.cdism.sum.edu.pl/ics/calendar-106.ics"
// const room107 = "http://www.cdism.sum.edu.pl/ics/calendar-107.ics"
// const room108 = "http://www.cdism.sum.edu.pl/ics/calendar-108.ics"

const icsLink = "http://www.cdism.sum.edu.pl/ics/calendar-";
const icsExension = ".ics";

const cdism = {
    firstFloor: [106,107,108,111,112,113,114,117],
    secondFloor: [201,204,206,208,210,211,213,219,220,221,222,223]
}

function allEvents() {

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    let allEventsInCDiSM = []
    for (let roomNumber of [...cdism.firstFloor,...cdism.secondFloor]){
        let singleRoom =  new Promise((resolve, reject) => {

            ical.fromURL(`${icsLink}${roomNumber}${icsExension}`, {}, function (err, dataFromICS) {
                let lecturesInfo = [];
    
                for(let singleData in dataFromICS){
                    if (today == dataFromICS[singleData].end.toLocaleDateString()){
                        let singleLectureInfo = {
                            summary: dataFromICS[singleData].summary,
                            date: dataFromICS[singleData].start.toLocaleDateString(),
                            startTime: dataFromICS[singleData].start.getHours() + ":" + (dataFromICS[singleData].start.getMinutes()<10 ? '0' : '') + (dataFromICS[singleData].start.getMinutes()) ,
                            endTime: dataFromICS[singleData].end.getHours() + ":" + dataFromICS[singleData].end.getMinutes(),
                            room: roomNumber,
                        }
                        lecturesInfo.push(singleLectureInfo)
                    } 
                }
    
                resolve(lecturesInfo)
            });
        })

        allEventsInCDiSM.push(singleRoom)
    }

    return Promise.all(allEventsInCDiSM)
}

module.exports = {
    allEvents: allEvents
}

