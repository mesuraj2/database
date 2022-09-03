const express=require('express');
var router =express.Router();
const bcrypt=require('bcrypt')

const  Signin  = require('./models/users');



// router.post('/',(req,res)=>{
//     var user=new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password 
//     })
//     user.save((err,data)=>{
//         if(!err){
//             res.send({message:'success'})
//         }
//         else{
//             // console.log(err);
//             res.send({message:'error'})

//         }
//     })
// })


router.post('/signup',async(req,res)=>{
    try {
        const pw = req.body.pw;
        const re_pw = req.body.re_pw;

console.log("hello")















        // const hell=async(token)=>{
        //     Signin.updateOne({email:req.body.email},{
        //         $set:{
        //             tokens:tokens.concat({token:await token})
        //         }

        //     })
        //     }



        // const verify=await jwt.verify(token,"himanshukumarguptaiswritingthiscodeforjwt");

        // 

        if (pw === re_pw) {
            console.log("hello")

            const signindata = new Signin({
                name: req.body.name,
                email: req.body.email,
                pw: pw,
            })
            console.log("hello")

            // console.log("hel")

            const token = await signindata.tokencreation();
            // console.log(token)
            res.cookie("trakev", token, {
                expires: new Date(Date.now() + 120000),
                httpOnly: true
            })
            // console.log(cookie)

            signuped = await signindata.save()

            console.log("hello")


            // console.log("hello")

            console.log("success insterted");
            res.status(201).send({message:'success'});
        }

        else {
            res.send({message:'password not matching'})
        }

    } catch (error) { res.send({error:"error"}) }
    // } catch (error) { res.send("Email or Phone Number already registered") }



})
router.post("/signin", async (req, res) => {
    try {
            const pwget = await Signin.findOne({ email: req.body.email })
            data=pwget         
            console.log("hello")

        
            global.id = data._id
            global.name = data.name
            pw = data.pw
            console.log("hello")
        console.log(req.body.pwc)
            check = await bcrypt.compare(req.body.pwc,pw)
            console.log("hii")

            try {
                const token = await data.tokencreation();
                res.cookie("trakev", token, {
                    expires: new Date(Date.now() + 120000),
                    httpOnly: true
                })
            } catch (error) {
                console.log(error)
                res.send({error:"error"})

            }
            
        

        if (check) {
                const list = await Signin.find({ dvr_stu: "driver" });
                combo = {}
                let str = []
                let ev = []
                for (let i = 0; i < list.length; i++) {
                    if (list[i].ev_name != undefined)
                        str[i] = list[i].ev_name + ":" + list[i].status + ' at ' + list[i].time
                    ev[i] = list[i].ev_name

                }
                console.log("hello")

                global.stat = str

                // middle()

                res.status(201).send({message:"success"})
        }
    }
    catch (error) {
        res.status(400).send({error:"error"});
    }
})


module.exports = router;

