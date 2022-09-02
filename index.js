const express =require("express")
const bodyparser=require('body-parser')
const my_notes=require('./my_notes')
// const cors=require('cors')


const mongoose=require('./db')
var app=express()
app.use(bodyparser.json())
// app.use(cors({origin:'http://localhost:3000/note'}))
app.listen(process.env.PORT || "6001",()=>console.log("server started at 6001"))

app.use('/notes',my_notes);