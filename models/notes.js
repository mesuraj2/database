const mongoose =require('mongoose')

let Note=mongoose.model('Note',{
    title:{type:String},
    desc:{type:String}
})

module.exports= {Note};