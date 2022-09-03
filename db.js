const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://znsuraj7:khukhundu@cluster0.idig2fu.mongodb.net/videoCall?retryWrites=true&w=majority",(err)=>{
    if(!err){
        console.log("successfull");
    }
    else{
        console.log("err"+err);
    }
})
module.exports=mongoose;