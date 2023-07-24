function x()
{
    var i=1;
    setTimeout(function(){
        console.log(i);
    // this function form a closure and remember the reference of i

    },3000);
    // once the timer is expire then again take this function and take it to callstack and print the function
    console.log("Namaste Mesiddhantcodes");
}
x();


// ------------------------------------------------------------------------------------------
function x() {
    for (var i = 1; i <= 5; i++) {
        // if we use let at  the place of var whcih is blocked scope 
        // each and every time of loop setTimeout is called and function form a closure with a new variable itself
        // the copy of i in each iteration is new 
        // here let is used beacuse of let is blocked scope and create a new copy every tiem 
        // 
        setTimeout(function () {
            console.log(i);
            // this i is pointing the same spot in the memory of the i

        }, i * 1000);
    }
    console.log("Namaste Siddhant");
}
x();
// Your expected output is Namaste Siddhant 
// namaste siddhant 
// 1
// 2
// 3
// 4
// 5

// but it give the 
// namaste siddhant 
// 6
// 6
// 6
// 6
// 6
// closure is liked funciton along with lexical environment


// ---------------------------------------------------------------
// for using var there is solution of making a closure and wraped the setTimeout function
//in another function 
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);

    }
    console.log("Namaste Siddhant");
}
x();

// using this method we create a new copy of i 
// which lead to call everytime setTimeout function which store in the separate memory space
