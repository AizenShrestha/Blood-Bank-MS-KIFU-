const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
require('dotenv').config()
app.use(express.json())
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  phonenumber: String,
  addr: String,
  dob: String,
  bloodgroup: {
    type: String,
    enum: ['O+','O-','A+','A-','B+','B-'],
    default: "null"
  }
});


const User = mongoose.model('User', userSchema);
const port = process.env.PORT


app.post('/Register', async(req, res) => {
 /// User.create({name:"HEHE", addr:"BTM"})
 const userExist = await User.exists({phonenumber: req.body.phonenumber})
 if(userExist)
  {
    return res.json({msg: "Phone Number has already been registered"})
  }
  await User.create(req.body)
  return res.json({msg: "User registered"})
})

/////app.get('/Register', async (req, res) => {
 //// const data = await User.find()
 /// res.send(data)
////})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})