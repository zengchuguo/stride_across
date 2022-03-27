const express = require('express')
const app = express()

app.use('/static', express.static('public'))

app.listen('8000', () => {
  console.log('app1 running at port 8000')
})
