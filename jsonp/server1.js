// server.js
let express = require('express')
let app = express()
app.get('/say', function (req, res) {
  let { wd, callback } = req.query
  console.log(wd) // 5500端口数据
  res.end(`${callback}('3000端口的数据')`)
})
app.listen(3000)
