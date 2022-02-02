const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', logger, (req, res) => {
  res.render('index', { text: 'World' })
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

const port = process.env.PORT || 4000
app.listen(port, ()=> {
  console.log(`Server runnong at http://localhost:${port}`)
})
