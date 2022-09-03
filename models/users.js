const mongoose =require('mongoose')

let User=mongoose.model('signup',{
    name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true}
})

module.exports= {User};