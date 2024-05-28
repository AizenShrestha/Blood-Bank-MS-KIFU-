const express = require('express')
const app = express()
const port = 5000

app.get('/me', (req, res) => {
  res.send({
    name:"Aizen",
    balance: 50000000,
    rewardPoints: 460
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})