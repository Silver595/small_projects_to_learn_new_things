require('express');
require('ws');

const express = require('express');
const {WebSocketServer} = require('ws');

const app = express();
const port = 4000;

const server = app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`); 
})

const wss = new WebSocketServer({server})

wss.on('connection',(stram)=>{
    stram.on("message",(data)=>{
        console.log("connection established");
        console.log(`Received data: ${data}`);
        console.log("hello bro`")
        stram.send("dlelo form server")
        
    })
    stram.ping("are you there")
})