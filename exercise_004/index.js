const express = require("express"); //declara a utilização do framework
const application = express(); //criando uma instancia do framework
const serverPort = 8181;

//routes
application.get("/", function (request, response) {
    response.send("Bem vindo!!");
});
application.get("/blog", function (request, response) {
    response.send("Bem vindo ao blog!!");
});
application.get("/blog/:date", function (request, response) {
    let id = request.params.date;
    response.send("Bem vindo ao blog - artigo " + date + "!!");
});
application.get("/blog/:date/:id", function (request, response) {
    let data = request.params.date;
    let id = request.params.id;
    response.send("Bem vindo ao blog - artigo " + data + " com id " + id + "!!");
});
application.get("/canal/youtube", function (request, response) {
    response.send("Bem vindo ao meu canal!!");
});
application.get("/canal/perfil", function (request, response) {
    response.send("Bem vindo ao meu perfil!!");
});
application.get("/canal/perfil/:type?", function (request, response) {
    let type = request.params.type
    if (type) {
        response.send("Bem vindo ao meu perfil do tipo " + type + "!!");
    } else {
        response.send("Bem vindo ao meu perfil!!");
    }
});
application.get("/query_parameters", function (request, response) {
    let q1 = request.query["q1"];
    if (q1) {
        response.send("Bem vindo ao meu teste de query parameters [" + q1 + "]!!");
    } else {
        response.send("Bem vindo ao meu teste de query parameters!!");
    }
});

application.listen(serverPort, function (error) {
    if (error) {
        console.log("Error to initialize server!")
    } else {
        console.log("Server initialized on port " + serverPort);
    }
});

