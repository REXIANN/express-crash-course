const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // res.send('Hi')
  // res.sendStatus(404)
  // res.status(404).send('Hi')
  // res.download('server.js')
  res.render()
})

app.listen(3000)
