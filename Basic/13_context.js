
tipp(44);

function tipp(s)
{
    var bill=parseInt(s);
    console.log(bill+5);
}


var bigtip=function (t)
{
    var bil=parseInt(t);
    console.log(bil+15);
};
bigtip(4);
// if we use var function then we have to call the function
// after the declaration of the function because
// the variable decalaration is scanned but made undefined in execution context

console.log(name);
var name ="siddhant ";
function naming()
{
    var name="siddhu";
    console.log(name);
}
console.log(name);