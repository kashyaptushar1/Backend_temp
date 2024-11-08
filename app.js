const express = require('express');
const morgan = require('morgan');
const userModel = require('./models/user')
const dbconnection = require('./config/db')

const app = express();
app.set("view engine",'ejs')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.get('/',(req,res)=>{
    console.log(req.body);
    res.render('login')
})
app.post('/get-data', async (req,res)=>{
    const {username, email, password} = req.body
    await userModel.create({
        username: username,
         email: email,
          password: password})
    res.send("data recieed")
})

app.listen(3000)