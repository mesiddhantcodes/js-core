const cart = ['shoes', 'pant', 'kurta'];

const promise = createOrder(cart) //orderId

promise.then(function (orderId) {
    console.log(orderId)
    // prceedTopayment(orderId)
}).catch(function(err)
{
    console.log(err.message);
})

// catch is used to (handle error) attach failure callback if the promise /callback fail 
// then this function is invoked

// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // this is thw way to create a promise 
        // Promise is constructor
        // this function createoder
        // validating cart
        if (!validateCart(cart)) {
            const err = new Error("Cart  is not valid")
            reject(err);
        }
        // logic of creating prder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function()
            {
            resolve(orderId);
            },5000)
            // resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart) {
    return false;
    // fir rejec the promise mark false
}