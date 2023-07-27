// {
//     // compund statement
//     var a=20;
//     console.log(a);

// }
// if(true)
// {
//     // block of code is written in the this block 
// }

{
    var a=200;
    let b=100;
    const c=2;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
// above is the exmple of block scope in js


// Shadowing
// if var is also declared outside the block then the var a of block is shadow the outside var
// var of inside block is also modified the value of a(var)

// let and const have a blocked scope and outside the block have a another scope

// three type of scope 
// 1.global
// 2.block 
// 3. memory of let and const
//    -----------------------------------------
// Shadowing is also valid in function 
var c=100;
function s()
{
    var c=10;
    console.log(c);
}
s();

console.log(c);

// illegal shadowing 
let s=10;
{
    var s=0;
    // if u want to shadow the let variale inside the block using the var it is not poosible
    // if var is declare outide the block and want to shadow the var using let in block is poosible

}
// block scope also follow the lexical scope 
const a=180;
{
    const a=100;
    {
        const a=1000;
        console.log(a);
    }
}