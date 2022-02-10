const exp=require('express');
const app =exp();
const http =require('http');
const port =3000
const server=http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {   
    socket.on("chat message",msg=>{
        console.log(msg);
        io.emit("chat message",msg)
    })
});

server.listen(port,()=>console.log(`Server Running on port ${port}`))