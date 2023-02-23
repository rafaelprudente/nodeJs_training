const express = require("express");
const application = express();
const serverPort = 8181;

application.set('view engine', 'ejs');
application.use(express.static('public'));

application.get("/", (request, response) => {
    response.render('index');
});
application.get("/ask", (request, response) => {
    response.render('ask');
});
application.post("/savequestion", (request, response) => {
    response.send("received");
});

application.listen(serverPort, function (error) {
    if (error) {
        console.log("Error to initialize server!")
    } else {
        console.log("Server initialized on port " + serverPort);
    }
});