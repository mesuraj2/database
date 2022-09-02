const express=require('express');
var router =express.Router();


const { Note } = require('./models/notes');

router.get('/',(req,res)=>{
    Note.find({}  ,(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})
router.get('/:id',(req,res)=>{
    id=req.params.id
    Note.find({_id:id}  ,(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

router.post('/',(req,res)=>{
    var note=new Note({
        title:req.body.title,
        desc:req.body.desc
    })
    note.save((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log(err);
        }
    })
})
router.put('/:id',(req,res)=>{
    var not={
        title:req.body.title,
        desc:req.body.desc
    }
    Note.findByIdAndUpdate(req.params.id,{ $set:not},{new:true},(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log(err);
        }
    })
})
router.delete('/:id',(req,res)=>{

    Note.findByIdAndDelete(req.params.id,(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log(err);
        }
    })
})


module.exports = router;

