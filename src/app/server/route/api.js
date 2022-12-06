const express=require ('express')
const User=require('../model/user')
const jwt=require('jsonwebtoken')
const router=express.Router()
const mongoose=require('mongoose')
const db="mongodb://localhost:27017"


mongoose.connect(db, error=>{
    if(error)
    {
        console.error('error! '+err)
    }
    else{
        console.log("connected to mongodb");
    }
})

function verifyToken(req,res,next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send("unauthorized request");
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token==='null')
    {
        return res.status(401).send('unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey')
    if(!payload)
    {
        return res.status(401).send('unauthorized request')
    }
    req.userId=payload.subject
    next()

}

router.get('/' , (req,res)=>
{
    res.send('from  API route')
})

router.post('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((error ,registerUser)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            let payload={ subject : registerUser.id}
            let token=jwt.sign(payload,"secretkey");
            res.status(200).send({token})
        }
    })
})
router.post('/login',(req,res)=>
{
    let userData=req.body
    User.findOne({
        email:userData.email
    },
    (error,user)=>
    {
        if(error)
        {
            console.log(error);
        }
        else{
            if(!user)
            {
                res.status(401).send("invalid email")
            }
            else
                if(user.password!==userData.password)
                {
                    res.status(401).send("invalid email")
                }
                else{
                    let payload={subject:user.id}
                    let token =jwt.sign(payload,"secretkey")
                    res.status(200).send({token});
                }

            
        }
    })
})
router.get('/events', (req,res)=>{
  
            let ev=[
            {
                "_id":"1",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            },
            {
                "_id":"2",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            },
            {
                "_id":"3",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            },
            {
                "_id":"4",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            },
            {
                "_id":"5",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            },
            {
                "_id":"6",
                "name":"Auto Expo",
                "description":"lorem ipsum",
                "date":"2012-04-23T18:25:43.511Z "
            }
        ]
        
        res.json(ev)
    


})




router.get('/special',verifyToken,(req,res)=>
{
    let events=[
        {
            "id":"1",
            "name":"somu",
            "description":"lorem",
            "date":"2012-04-23T18:25:43.511Z"
          

        },
        {
            "id":"2",
            "name":"gomu",
            "description":"lorem2",
            "date":"2012-04-23T18:25:43.511Z"
            
        },
        {
            "id":"3",
            "name":"momu",
            "description":"lorem3",
            "date":"2012-04-23T18:25:43.511Z"
        },
    
        
    ]
    res.json(events)

})



module.exports=router


// const bodyParser=require('body-parser')
// // const cors=require('cors');
// const PORT=3000;

// const app=express();


// app.use(bodyParser.json());
// // app.use(cors())

// app.get('/' , function(req,res)
// {
//     res.send('hello from server')
// })

// app.post('/enroll',function(req,res)
// {
//     console.log(req.body);
//     res.status(200).send({"message":"Data:received"})
// }
// )
// app.listen(PORT,function()
// {
//     console.log("server running on local host"+ PORT);
// })
