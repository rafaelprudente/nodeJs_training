let http = require("http");
let serverPort = 8181;

http.createServer(function(request, response){
    response.end("<h1>Bem vindo!!!</h1>")
}).listen(serverPort);

console.log("server up on port: " + serverPort)