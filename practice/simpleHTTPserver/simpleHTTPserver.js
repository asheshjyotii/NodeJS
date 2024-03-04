// const http = require ("http")
// const fs = require ("fs")

// const server = http.createServer((req,res)=>{
//     var log = `New request at : ${Date.now()}\n`
//     fs.appendFile("log.txt", log, (err, data)=>{
//         console.log(data)
//         res.end("You are connected to the server at: ")
//     })
// })
// server.listen(8000,()=>{console.log("SERVER STARTED....")})




// import http module as http
const http = require("http")
// import the file handling module as fs
const fs =  require("fs")

// creating the server using the createServer function of http
const myServer = http.createServer((req,res)=> {
// saving the current date time in a constant , which gets executed once the client connects
    
    const log =` New request recieved at : ${Date.now()}\n `
// saving the log to a text file and sending a respose string (asynchronously)
    fs.appendFile("simpleserverLOG.txt", log, (err,data)=>{
        res.end("hello from server")
        
    })
})

//creating the server
myServer.listen(8000,()=>console.log('server started....'));