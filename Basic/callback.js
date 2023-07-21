//  var isEven=function(ele)
//  holding the functiton in the variable
var isEven=(ele)=>
 {
    // if(ele%2===0)
    // {
    //     return true;
    // }
    // return false;
    return ele%2===0;
    // when we use arrow function then we have to use  return 
 };
var res=[2,4,6,8].every(isEven);
console.log(res);