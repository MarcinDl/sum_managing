const express = require("express");
const cors = require('cors');
const app = express();


const iCalData = require("./ical/ical-logic")


app.use(cors()) 	
app.get("/api", (req, res, next) => {
    res.json(iCalData);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});