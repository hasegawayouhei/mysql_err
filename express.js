const express = require("express");
const app = express();
const Hello= require("./HelloWorld");
const mysql= require("./mysql");


app.get("/", (req,res) => {
	Hello.Hello(req,res);
});
app.get("/api", (req,res) => {
	res.send("hello api");
});

app.get("/user/:name?",(req,res) => {
	if(req.params.name){
		res.send("hello "  +  req.params.name);
	}else{
	res.send("Hello nobody");
	}
	// res.send(req.params.name);
});
app.use(express.static(__dirname + "/text"));
app.get("/hello.txt" , (req,res)=>{
	res.sendfile(__dirname + "/text/hello.txt");
});

mysql.mysqlConnect();

app.listen(4000);
console.log("server listen ...");