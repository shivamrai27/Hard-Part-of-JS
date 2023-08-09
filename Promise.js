// Implementing Promise(Produce and Consume)
const cart = ('Shoes', 'Pants', 'Kurta');
// This is the example consumer part of the promise
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })

// This is the example producer part of the promise API

const promise = createOrder(cart); // Just small consuming dont focus
promise.then(function (orderID) {
    console.log(orderID);
    // proceedToPayment(orderId); 

});

function createOrder(cart) {  // focus here the produceing part
    const pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) { //validateCart is deified on line 42 below
            const err = new Error("Invalid Cart");
            reject(err);
        }
        const orderID = "12345";

        if (orderID) {
            resolve(orderID);
        }

    });
    return pr;
}

function validateCart(cart) {
    return true;
}


