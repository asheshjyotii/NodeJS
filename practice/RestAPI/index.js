const express = require("express")
const fs = require("fs")



const app = express()
const port = 8000

// middleware for body
app.use(express.json({extended: false}))

const users = require("./fake_data.json")


app.route("/api/users")

.get((req, res)=>{
    return res.json(users)
})

.post((req, res)=>{
    const body = req.body
    
    users.push({id : users.length + 1,...body})
    console.log(users)
    
    fs.writeFile("./fake_data.json", JSON.stringify(users),()=>{
        console.log("Data SAVED at id:",users.length)
        res.send("Success")
        
    })
   
    
})

app.route("/api/users/:id")

.get((req, res)=>{
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    // res.end(user.ip_address+'       ->        '+user.first_name)
    return res.json(user)
})

.patch((req, res)=>{
    // get the id 
    const id = Number(req.params.id)
    // get the matched info
    const matched = users.find(i=>i.id === id)
    // find the index of actual info
    const index = users.indexOf(matched)
    // perform set operation
    Object.assign(matched, req.body)
    // update the json object 
    users[index] = matched
    // write the complete new data in the json file
    fs.writeFile("./fake_data.json", JSON.stringify(users),(err)=>{
        console.log("Successfull, the updated cred: \n",matched)
        res.status(200).json(users)
    })

})
.delete((req, res)=>{})
.put((req, res)=>{})



app.listen(port,()=>{ console.log("SERVER started....")})