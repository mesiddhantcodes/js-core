

let a=10;
console.log(a);
var b=100;

// -------------------------------------------------------------------------------------------------------------------
// if we write a in console.log then we get an error of cannot access 'a' before initialiazation
// this error state that we cannot access a before initialiazation
// var b is attached to the global object

// but let and const are put in some differnet space than global and you caanot access these memoryspace/or declaration 
// before putting value in them 
// Temporal deadzone----the phase from hositing the let variable and till it is initailized some value the between that is known as temporal dead zone
// --------------------------------------------
// when we try to access the variable in temporal deadzone it gives the error of cannot acces the varriable 
//------------------------------------------------------------------------------------------------------------------------

// the let variable is not present in the global object (window object) which is known as window 
// Duplicate redeclaration of let
// __________________________________________
// there is no declaration or duplicate declaration of let variable 
// no single line of code is run direct give the error of syntaxerror
// if we use let a we cannot use same name even in var variable in same scope

// 