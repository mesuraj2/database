const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://znsuraj7:khukhundu@cluster0.idig2fu.mongodb.net/myfirstdatabase?retryWrites=true&w=majority",(err)=>{
    if(!err){
        console.log("successfull");
    }
    else{
        console.log("err"+err);
    }
})
module.exports=mongoose;