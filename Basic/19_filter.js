// filter function is used to filter the value inside an array

const arr=[5,1,3,2,6];
// filter the odd value 

function isdd(c)
{
    return c%2;
}
const outpudt=arr.filter(isdd); 
const output=arr.filter((x)=>x%2); 
console.log(output);