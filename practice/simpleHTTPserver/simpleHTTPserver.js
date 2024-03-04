const http = require("http")

const server = http.createServer((req, res)=>{
    var requests = req.headers
    console.log(requests)
    res.end("Server Response..")
})
server.listen(8000);