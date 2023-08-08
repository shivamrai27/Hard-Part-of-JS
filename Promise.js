// Implementing Promise(Produce and Consume)

const cart = ('Shoes', 'Pants', 'Kurta');
// This is the consumer part of the promise
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