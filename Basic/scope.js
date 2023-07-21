// function a()
// {
//     console.log(b);
//     // here b is posible to acces 

// }
// var b=10;
// a();

// ---------------------------------------------------
function a()
{
    var b=10;
    c();
    function c()
    {
        console.log(b);
    }
}
a();

// here scope comes in picture 
// where u can access the variable
