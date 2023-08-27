const fs=require('fs');
const express=require('express');
const app=express();
const http=require('http');
app.listen(3000,function(){
    console.log('server is running')
});
app.get('/',(req,res)=>{
    // res.send("hwowfffo");
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    // ---------------------------
    // 2nt method 
    // reading from stream
    // const rstream=fs.createReadStream('input.txt');
    // rstream.on('data',(chunk)=>{
    //     res.write(chunk);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // })
    // ------------------------------
    // 3rd pipe method;
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res)

})