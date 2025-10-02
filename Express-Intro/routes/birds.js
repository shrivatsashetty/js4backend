const express = require('express')
const router = express.Router()


// http://localhost:3000/birds/
router.get('/', (req, res) => {
  res.send('<h1>Birds home page</h1>')
})

// http://localhost:3000/birds/about
router.get('/about', (req, res) => {
  res.send('<h1>About Birds</h1>')
})

// http://localhost:3000/birds/about/kiwi
router.get('/about/:birdName', (req, res) => {
  res.send(`<h1>About ${req.params.birdName}</h1>`)
})

module.exports = router

