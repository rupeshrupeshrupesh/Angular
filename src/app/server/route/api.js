const express = require('express')
const User = require('../model/user')
const Book = require('../model/booking')
const jwt = require('jsonwebtoken')
const router = express.Router()
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017"


mongoose.connect(db, error => {
    if (error) {
        console.error('error! ' + err)
    } else {
        console.log("connected to mongodb");
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorized request");
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send('unauthorized request')
    }
    req.userId = payload.subject
    next()

}

router.get('/', (req, res) => {
    res.send('from  API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registerUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = {
                subject: registerUser.id
            }
            let token = jwt.sign(payload, "secretkey");
            res.status(200).send({
                token
            })
        }
    })
})

router.post('/book', (req, res) => {
    console.log('req : ', req.body);
    let bookdata = req.body
    let book = new Book(bookdata)
    console.log('book ', book);
    book.save((error, bookingUser) => {
        if (error) {
            console.log(error);
        } else {




            res.status(200).send(bookingUser);
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({
            email: userData.email
        },
        (error, user) => {
            if (error) {
                console.log(error);
            } else {
                if (!user) {
                    res.status(401).send("invalid email")
                } else
                if (user.password !== userData.password) {
                    res.status(401).send("invalid email")
                } else {
                    let payload = {
                        subject: user.id
                    }
                    let token = jwt.sign(payload, "secretkey")
                    res.status(200).send({
                        token
                    });
                }


            }
        })
})
router.get('/events', verifyToken, (req, res) => {

    let ev = [{
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z "
        }
    ]

    res.json(ev)



})

router.get('/hub', (req, res) => {
    let h = [{
            "Title": "The Lion King",
            "Year": "2019",
            "Runtime": "118 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"

        },
        {
            "Title": "Mowgli: Legend of the Jungle",
            "Year": "2018",
            "Runtime": "104 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
        },
        {
            "Title": "Doctor Strange",
            "Year": "2016",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "John Wick",
            "Year": "2014",
            "Runtime": "101 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {
            "Title": "Doctor Strange",
            "Year": "2016",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "RRR",
            "Year": "2021",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "PK",
            "Year": "2017",
            "Runtime": "230 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "One Two Four",
            "Year": "2009",
            "Runtime": "225 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Sholey",
            "Year": "2000",
            "Runtime": "250 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
    ]
    res.json(h);
})




router.get('/special', verifyToken, (req, res) => {
    let events = [{
            "id": "1",
            "name": "somu",
            "description": "lorem",
            "date": "2012-04-23T18:25:43.511Z"


        },
        {
            "id": "2",
            "name": "gomu",
            "description": "lorem2",
            "date": "2012-04-23T18:25:43.511Z"

        },
        {
            "id": "3",
            "name": "momu",
            "description": "lorem3",
            "date": "2012-04-23T18:25:43.511Z"
        },


    ]
    res.json(events)

})



module.exports = router


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