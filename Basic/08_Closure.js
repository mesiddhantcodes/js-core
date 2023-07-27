function s()
{
    var a=6;
    function t()
    {
        console.log(a);
    }
     return t;
    //  whole closure funciton and with lexical scope bundle is returned

}


//--------------------------------------------------------


// when wew store s in z then s is gone but funtiion t have all the information
// like lexical scope and where it came from
var z=s();
console.log(z);
z();
// This is closure 
// function along wth lexical scope is form a closure
// closure gives you access to an outer function's scope from an inner function
// in js function should also be returned as a fucntoin output



// USES OF CLOSURE 
// -Module Design Pattern 
// -Currying
// -function like once
// -memoize
// -maintaing state in async world
// -setTimeouts
// -Iterators
// -and many more
