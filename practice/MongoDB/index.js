// import express(for server), fs(for file handling), mongoose(for database)
const express = require("express")
const fs = require("fs")
const mongo = require("mongoose")

// initialise express object
const app = express()
const port = 8000

// connect mongodb
mongo.connect('mongodb://127.0.0.1:27017/homeai').then(()=>{console.log("MongoDB Connected")}).catch((err)=>{"MongoDB Not Connected: ",err})


// middleware to handle form input type
app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))
// middleware to log new requests
app.use((req, res, next)=>{
    const date = new Date()
    fs.appendFile("./log.txt",`${date.toLocaleDateString()}  ->  ${date.toTimeString()}  -> " ${req.path}"  ->  ${req.ip}\n`,(err,result)=>{
       next()
    })
})




// schema
const authSchema = new mongo.Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// model
const auth = mongo.model("auth01",authSchema)


app.get("/",(req, res)=> {
    return res.end("Welcome to Home Page")
})
app.post("/submit",(req, res)=>{
    const body = req.body

    // check for required fields
    if(!body || !body.first_name || !body.email || !body.password)
    {
        return res.status(400).end("All fields are required")
    }

    // create a new place for the data
    const user_created = new auth ({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        password : body.password,
    })

    // save the data in the database
    user_created.save().then(user_created => {
    console.log(user_created)
  }).catch(err => {
    console.log(err)
  })
  return res.status(201).json("Response recieved...")

})


// start the server
app.listen(port,(err)=>{console.log("server started...")})