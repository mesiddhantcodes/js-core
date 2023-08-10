const area=require('./area/rectangle');
console.log(area(4,5));




const fs=require('fs');

fs.readFile("./files/a.txt","utf-8",function(err,data)
{
    if(err)
    {
        console.log("eror",err);
    }
    else{
        console.log("data",data);
    }
});