const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('New User Form')
})

router.post('/', (req, res) => {
  res.send('Create User')
})

router.route('/:userId')
  .get((req, res) => {
    console.log('req.user: ', req.user)
    const id = req.params.userId
    res.send(`User ID is ${id}`)
  })
  .put((req, res) => {
    const id = req.params.userId
    res.send(`Updated User ID is ${id}`)
  })
  .delete((req, res) => {
    const id = req.params.userId
    res.send(`Deleted User ID is ${id}`)
  })

const users = [{ name: 'Kim' }, { name: 'Lee' }]
router.param('userId', (req, res, next, userId) => {
  console.log(userId)
  req.user = users[userId]
  next()
})

module.exports = router
