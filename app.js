const express = require('express')
const app = express()
const port = 3000

app.get('/app', (req, res) => {
  res.send('Welcome to gilpil.com')
})

app.get('/app/user', (req, res) => {
  res.send('Hello User')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})