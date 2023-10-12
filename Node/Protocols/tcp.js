const net=require('net');
const server=net.createServer((socket)=>{
    socket.write('Echo server\r\n');
    // socket.on('end',data=>{
    //     console.log(data.toString());
    // });
    
});

server.listen(8080,()=>{
    console.log('server bound');
});