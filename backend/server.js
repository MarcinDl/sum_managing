const express = require("express");
const cors = require('cors');
const app = express();


const iCalData = require("./ical/ical-logic")
// więcej o dostępie do folderów: https://nodejs.dev/learn/nodejs-file-paths?fbclid=IwAR3BAg6KaUJNYA6Wujbp3vSbiJcLSUsEtK_MEhqiCq5Yu1iz40_YzirWrhU

app.use(cors()) 	
app.get("/api", (req, res, next) => {
    // iCalData.allEvents().then( respond => {
    //     res.json(respond)
    // })

    iCalData.allEvents().then((msg) => {
        // console.log(msg)
        res.json(msg.flat())
      }).catch((msg) => {
        console.log("uups, coś poszło nie tak", msg)
      })
    // res.json(iCalData.allEvents());

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});