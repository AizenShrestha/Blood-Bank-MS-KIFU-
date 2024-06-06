const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dbConnect = require('./src/db/connection')
const cors = require('cors')


dbConnect()
const app = express()
app.use(cors())
require('dotenv').config()
//body parser
app.use(express.json())
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  dob: String
});
const User = mongoose.model('User', userSchema);
const port = process.env.PORT

app.post('/Register', async (req, res) => {
  console.log(req.body)
  const hashPassword = await bcrypt.hash(req.body?.password, saltRounds)
  req.body.password = hashPassword
  const emailExist  = await User.exists({email: req.body.email})

if(emailExist){
    return res.json({msg: "Email is taken!"})
  }
  await User.create(req.body)
  return res.json({msg: "User registered"})
})

app.post('/Login',async(req,res)=>{
  console.log(req.body)
  const user  = await User.findOne({email: req.body.email})
  if(user){
  const isMatched=  await bcrypt.compare(req.body.password, user.password);
    if(isMatched){
      const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
      res.json({msg: "Authorized", token})
    }else{
      res.json({msg: "Invalid Password"})
    }
  }else{
    res.json({msg: "Invalid Email"})
  }
  //

  // YES: 
    // check if password matches
      // NO: res.json({msg: "Incorrect password"})
      //YES: token
})


app.get('/users',async(req,res)=>{
  const data = await User.find()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})