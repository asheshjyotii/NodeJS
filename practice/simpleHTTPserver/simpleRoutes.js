const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res)=>{
    const myurl = url.parse(req.url)
    var log = `Request at-> ${Date.now()} ---------- PATH -> ${myurl.pathname}\n` 
    console.log(log)
    fs.appendFile("Nodejs/NodeJS/practice/simpleHTTPserver/simpleroutesLOG.txt",log,(err,data)=>{
        console.log("DATA written")
        switch (myurl.pathname)
        {
            case "/":
                res.end("Home Page")
                break
            case "/about":
                res.end("This the simple routing")
                break
            case "/contactus":
                res.end("Connect with me on GitHub 'github.com/asheshjyotii' ")
                break
            default:
                res.end("404 Page Not Found")
                break
        }
    })
    
    
     
})
server.listen(8000,()=>{console.log("SERVER STARTED at localhost:8000")})