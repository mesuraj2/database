const express=require('express');
var router =express.Router();


const { User } = require('./models/users');

// router.get('/',(req,res)=>{
//     Note.find({}  ,(err,data)=>{
//         if(!err){
//             res.send(data)
//         }
//         else{
//             console.log(err)
//         }
//     })
// })
// router.get('/:id',(req,res)=>{
//     id=req.params.id
//     Note.find({_id:id}  ,(err,data)=>{
//         if(!err){
//             res.send(data)
//         }
//         else{
//             console.log(err)
//         }
//     })
// })

router.post('/',(req,res)=>{
    var user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password 
    })
    user.save((err,data)=>{
        if(!err){
            res.send({message:'success'})
        }
        else{
            // console.log(err);
            res.send({message:'error'})

        }
    })
})
// router.put('/:id',(req,res)=>{
//     var not={
//         title:req.body.title,
//         desc:req.body.desc
//     }
//     Note.findByIdAndUpdate(req.params.id,{ $set:not},{new:true},(err,data)=>{
//         if(!err){
//             res.send(data)
//         }
//         else{
//             console.log(err);
//         }
//     })
// })
// router.delete('/:id',(req,res)=>{

//     Note.findByIdAndDelete(req.params.id,(err,data)=>{
//         if(!err){
//             res.send(data)
//         }
//         else{
//             console.log(err);
//         }
//     })
// })


module.exports = router;

