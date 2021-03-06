const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.all('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! User registered!`
  })
})

app.listen(process.env.port || 3000)
