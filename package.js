const { response } = require("express");
var express = require("express");
const { request } = require("http");
var apiServer = express();
console.log("funzia");
var a= 5;
var b ="3"; 
console.log(a+b);

var port = 3000;
var host = "localhost";
apiServer.listen(port,host, ()=>{
console.log("servr running at https://%s:%d", host , port)

});


apiServer.get("/", (request,response) => {
console.log("sono in GET/",request);
response.send("<h1>Ciao client sono in HOME</h1>");


});

//http://localhost:3000/nome---->Bez

var nome ="Bez";
apiServer.get("/nome",() => {
    console.log("richiesta get su nome");
    response.send("Ciao il mio nome è:"+nome);


});

apiServer.get("/mioNome",(request,response) => {
    console.log("richiesta get su mioNome"+request.query);
    response.send("Ciao il mio nome è:"+request.query.nome);


});

//httphttp://localhost:3000/somma?a=1&b=2
//risultato = 3

