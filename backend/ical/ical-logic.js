const ical = require('node-ical');

const room106 = "http://www.cdism.sum.edu.pl/ics/calendar-106.ics"
const room107 = "http://www.cdism.sum.edu.pl/ics/calendar-107.ics"

const icsLink = "http://www.cdism.sum.edu.pl/ics/calendar-";
const icsExension = ".ics";

const room = {
    firstFloor: [106,107,108,111,112,113,114,117],
    secondFloor: [201,204,206,208,210,211,213,219,220,221,222,223]
}

let firstFloorArray = [];
let secondFloorArray = [];

function allEvents() {

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    let neww =  new Promise((resolve, reject) => {

        ical.fromURL(room106, {}, function (err, dataFromICS) {
            let lecturesInfo = [];

            for(let singleData in dataFromICS){
                // console.log(dataFromICS[singleData])
                if (today == dataFromICS[singleData].end.toLocaleDateString()){
                    let singleLectureInfo = {
                        summary: dataFromICS[singleData].summary,
                        date: dataFromICS[singleData].start.toLocaleDateString(),
                        // startDate: dataFromICS[singleData].start.toLocaleDateString(),
                        // endDate: dataFromICS[singleData].end.toLocaleDateString(),
                        startTime: dataFromICS[singleData].start.getHours() + ":" + dataFromICS[singleData].start.getMinutes(),
                        endTime: dataFromICS[singleData].end.getHours() + ":" + dataFromICS[singleData].end.getMinutes(),
                        room: room106.substr(-7, 3),
                    }
                    lecturesInfo.push(singleLectureInfo)
                    // console.log(lecturesInfo)
                } 
            }

            resolve(lecturesInfo)
        });
    })
    let neww2 =  new Promise((resolve, reject) => {

        ical.fromURL(room106, {}, function (err, dataFromICS) {
            let lecturesInfo = [];

            for(let singleData in dataFromICS){
                // console.log(dataFromICS[singleData])
                if (today == dataFromICS[singleData].end.toLocaleDateString()){
                    let singleLectureInfo = {
                        summary: dataFromICS[singleData].summary,
                        date: dataFromICS[singleData].start.toLocaleDateString(),
                        // startDate: dataFromICS[singleData].start.toLocaleDateString(),
                        // endDate: dataFromICS[singleData].end.toLocaleDateString(),
                        startTime: dataFromICS[singleData].start.getHours() + ":" + dataFromICS[singleData].start.getMinutes(),
                        endTime: dataFromICS[singleData].end.getHours() + ":" + dataFromICS[singleData].end.getMinutes(),
                        room: room106.substr(-7, 3),
                    }
                    lecturesInfo.push(singleLectureInfo)
                    // console.log(lecturesInfo)
                } 
            }

            resolve(lecturesInfo)
        });
    })

    return Promise.all([neww, neww2])
}

module.exports = {
    allEvents: allEvents
}

