const express = require("express");
const application = express();
const serverPort = 8181;

application.set('view engine', 'ejs');

application.get("/:name/:lang", (request, response) => {
    let nome = request.params.name;
    let ling = request.params.lang;
    let showMsg = false;
    response.render('index',{
        name: nome,
        lang: ling,
        company: 'RR Consulters',
        subscribers: 8000,
        error: showMsg
    });
});

application.listen(serverPort, function (error) {
    if (error) {
        console.log("Error to initialize server!")
    } else {
        console.log("Server initialized on port " + serverPort);
    }
});