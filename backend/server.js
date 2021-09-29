const express = require("express");
const cors = require('cors');
const app = express();


const iCalData = require("./ical/ical-logic")
// więcej o dostępie do folderów: https://nodejs.dev/learn/nodejs-file-paths?fbclid=IwAR3BAg6KaUJNYA6Wujbp3vSbiJcLSUsEtK_MEhqiCq5Yu1iz40_YzirWrhU

app.use(cors()) 	
app.get("/api", (req, res, next) => {
    res.json(iCalData);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});