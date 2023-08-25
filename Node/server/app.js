const express=require('express');
const app=express();
const http=require('http').createServer(app);

const port=process.env.PORT||3030

// app.listen(port,()=>{
//     console.log("running on the port");
// }

// without using express
// http.createServer((req,res)=>{
//     res.write("hwellloe")
//     res.end();
// }).listen(3030,()=>{
//     console.log('kdjffkdjfk')
// })


app.listen(port,()=>{
    console.log('running on the port');

})
// with using express
app.get('/',(req,res)=>{
    res.write('<h1>This is Siddhant kumar</h1>');
    res.end();
})