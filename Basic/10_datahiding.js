function counter()
{
    var count=0;
    return function increCount()
    {
        count++;
        console.log(count);
    }
}
var count1=counter();
count1();
// this count1 increase the count by 1
var count2=counter();
// if we makw one more coutn2 function then we got a one another fresh counter (new)
count2();


// ------------------------------------------------------------------------------------------
// this is not a good way to make a counter 
// above code is not scalable 
// we use constructor function to make separate incre and decre function

// ====
// ----------------------------------------------------------
function Counter()
{
    var count =0;
    this.increcounter=function(){
        count++;
        console.log(count);
    }
    this.decrecounter=function()
    {
        count--;
        console.log(count);
    }
}
var count1=new Counter();
// here new is used due to construtor fucntoin
count1.increCount();
count1.increcounter();
count1.decrecounter();