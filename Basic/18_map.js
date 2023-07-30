// map function is used an transform an array
// 
const arr=[5,1,3,2,6];
function double(x)
{
    return x*2;
}
function triple(x)
{
    return x*3;
}
function bin(x)
{
    return x.toString(2);
}

const output=arr.map(triple);
console.log(output);

const outputt=arr.map(function bin(x)
{
    return x.toString(2);
});

const outputtt=arr.map((x)=>x.toString(2));
