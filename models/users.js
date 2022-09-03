// const mongoose =require('mongoose')

// let User=mongoose.model('signup',{
//     name:{type:String,required: true},
//     email:{type:String,required: true},
//     password:{type:String,required: true}
// })

// module.exports= {User};


const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const signinschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    },


    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


})

signinschema.methods.tokencreation = async function () {
    try {

        const token = jwt.sign({ email: this.email }, "himanshukumarguptaiswritingthiscodeforjwt", { expiresIn: "10 minutes" });

        this.tokens = this.tokens.concat({ token: token })
        console.log("hel")
        await this.save()
        return token
    }
    catch (error) { console.log(error) }
}

signinschema.pre("save", async function (next) {
    if(this.isModified("pw")){
    console.log(this.pw)
    this.pw = await bcrypt.hash(this.pw, 4);
    console.log(this.pw)
    }
    next();
})


const Sign = new mongoose.model("Signin", signinschema);
module.exports = Sign

