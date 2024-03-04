
// import express and other requirements
const express = require ("express")
const fs = require("fs")

// create app instance of the express import
const app = express()

const port = 8000


/* define all the http methods of each 
routes and define the fucntions to perform when matches
*/
app.get("/",(req, res)=>{
    var date = new Date()
    var log = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}          '${req.path}'         ${req.ip}\n`
    fs.appendFile("expressServerLOG.txt",log,(err,data)=>{})
    res.end("Welcome to Home Page")
})

app.get("/about",(req, res)=>{
    var date = new Date()
    var log = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}          '${req.path}'         ${req.ip}\n`
    fs.appendFile("expressServerLOG.txt",log,(err,data)=>{})
    res.end("Simple ExpressJS implemented server...")
})
app.get("/contactus",(req, res)=>{
    var date = new Date()
    var log = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}          '${req.path}'         ${req.ip}\n`
    fs.appendFile("expressServerLOG.txt",log,(err,data)=>{})
    res.end("Join me on GitHub-> github.com/asheshjyotii")
})


// Switch on the server at a port
app.listen(port,()=>{console.log("SERVER Running at localhost:8000")})