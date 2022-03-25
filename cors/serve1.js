// src/app1.js
const express = require('express')
const app = express()

// `index.html` 加载时会请求login接口
// 设置`cookie`
// 在所有路由前增加，可以拦截所有请求
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/login', (req, res) => {
  res.cookie('user', 'jay', { maxAge: 2000000, httpOnly: true })
  res.json({ code: 0, message: '登录成功' })
})

// 此接口是检测`cookie`是否设置成功，如果设置成功的话，浏览器会自动携带上`cookie`
app.get('/user', (req, res) => {
  // req.headers.cookie: user=jay
  res.json({ code: 0 })
})

// 托管`index.html`页面
// 这样的话在`index.html`中发起的请求，默认的源就是`http://localhost:8000`
// 然后再去请求`http://localhost:8003`就会出现跨域了
app.use('/static', express.static('./'))

app.listen('8000', () => {
  console.log('app1 running at port 8000')
})
