

// function statement  
// function statement is also known as function declaration 

function a()
{
    console.log("This way of creating a function is known as statement function");
}
// the major differnece between function statement and function expression is hoisting
// if we call functioon a before it declaration then it will fine 
// if we call function b before it declaration it throw an error

// --------------------------------------------------------------------------------------------------------------------

// function expression
var b=function()
// in js function act as value 
{
    console.log("This is called as a function expression");
}
// -----------------=======-------------------------------------------------------------------------------------------------


// Anonymous function 
// function without name is known as ananymous function 
// it doesnot have it own identity 
// it is used at a place where function is used as avalue 
// function ()
// {
// }
// --------------------------------------------------------------------------------------------------------------------

// Named function expression

var b=function xyz() 
{
    console.log("Named function is assigned to the var b");
}
// ---------------------------------------------------------------------------------------------------------------------

// difference between the parameter and argument 
var c=function(param1 ,param2){
// this param1 and param2 is the local variable inside the function 
}

c(4,4);


// this 4 4 is the argument of the function 
// the value which is passed inside the function is known as argument 


// ----------------------------------------------------------------------------------------------------------------------

// First Class Function 
// First Class Citizen
// the ability of function used as value and can pe passed as an argumrnt to another function 
// and can be returned as a function this ability  is known as first class function 


var bb=function (param3)
{
    return function acc()
    {

    }
}
console.log(bb());
// ------------------------------------------------------------------------------------------------------------------------------
// Arrow function


var b= ()=>
{
    
}