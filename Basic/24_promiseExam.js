
const cart=['shoes','mask','pant'];

createOrder(cart)
.then(function(orderId)
{
    console.log(orderId);
    return orderId;
}).then(function(orderId)
{
    return proceedPayment(orderId);
}).then(function (paymentInfo)
{
    return showorderSummary(paymentInfo);
}).then(function(summ)
{
    console.log("wallet is updated");
})


function showorderSummary(payInfo)
{
    return true;
}
function proceedPayment(orderId)
{
    const ss=new Promise(function(resolve,reject)
    {
        if(orderId!=1234)
        {
        const ee=new Error("payment is not succesfu.l");
        }
        const payInfo=4000
        resolve(payInfo);

    })
    return ss;
}

function createOrder(cart)
{
    // creating a promise 
    const pro=new Promise(function(resolve,reject)
    {
        if(!validCrt(cart))
        {
            const err=new Error("The cart is Empty!! Please add a item in it ");
            reject(err);
        }
        const orderId=1234;
        setTimeout(function(){
            resolve(orderId)
        },4000 );
    })
    return pro;
}
function validCrt(cart)
{
    return cart.length>2;
}