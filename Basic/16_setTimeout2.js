console.log("start");
setTimeout(function an()
{
    console.log("hey i am a timmer");
},5000);
console.log("end");

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<=startDate+10000)
{
    endDate=new Date().getTime();
}
console.log("While expire here");