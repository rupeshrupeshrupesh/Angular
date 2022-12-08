const express=require ('express')
const bodyParser=require('body-parser')
const cors=require('cors');
const PORT=3000;
const api=require('./route/api')

const app=express();


app.use(bodyParser.json());
app.use(cors())

app.use('/api',api);

app.get('/' , function(req,res)
{
    res.send('hello from server')
})


app.listen(PORT,function()
{
    console.log("server running on local host"+ PORT);
})
