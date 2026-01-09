require('express')
require('ws')

const express = require('express')
const { WebSocketServer} = require('ws')

const app = express()
const port = 3000

const hell = app.listen(port,()=>{
    console.log(
    `Server is running at http://localhost:${port}`
    )
})

const hell_server = new WebSocketServer({hell})

hell_server.on("connection",(ws)=>{
    console.log("New client connected")
    ws.on("message",(message)=>{
        console.log(`Received: ${message}`)
        ws.send(`Echo: ${message}`)
    })
})