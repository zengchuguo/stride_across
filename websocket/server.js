// server.js
let express = require('express')
let app = express()
let WebSocket = require('ws') //ws库使用websocket

let wss = new WebSocket.Server({ port: 3000 })
wss.on('connection', function (ws) {
  ws.on('message', function (data) {
    ws.send('3000端口信息')
    ws.send('<h1>data</h1>')
  })
})
