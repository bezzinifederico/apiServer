//const { response } = require("express");
//var express = require("express");
const { request } = require("http");
var apiServer = express();
var fs = require("fs");
const { takeCoverage } = require("v8");

console.log("funzia");
//var a= 5;
//var b ="3"; 
//console.log(a+b);


var port = 3000;
var host = "localhost";
apiServer.listen(port,host, ()=>{
console.log("servr running at https://%s:%d", host , port)

});

apiServer.get("/", (request,response) => {
console.log("sono in GET/",request);
response.send("<h1>Ciao client sono in HOME</h1>");

});

//http://localhost:3000/students?id=1

var nome ="Bez";
apiServer.get("/nome",() => {
    console.log("richiesta get su nome");
    response.send("Ciao il mio nome è:"+nome);


});

apiServer.get("/somma",(request,response) => {
    console.log("somma request",request.query);
    //response.send("Il risultato è:"+request.query.a-(-request.query.b));
    //numeri interi
    response.send("Il risultato è:"+(ParseInt(request.query.a)+ ParseInt(request.query.b)));
// parseInt sta per calcolare tutti i numeri reali

});
apiServer.get("/studenti",(request,response) => {
    console.log("studenti request",request.query.id);
  //legge
  fs.readFile("studenti.json",(err,data)=> {
 if(err) {
     console.log("error: "+err);
  } else {
    var students=JSON.parse(data);
    response.send(students.find(x=>x-id == request.query.id))
   }  
});
  //prende l'oggetto con id 1


 
  //send
  
//http://localhost:3000/  
//Newstudents?id=3&name=mattia&surname=amati/     // crea quanto richiesto nel file
});