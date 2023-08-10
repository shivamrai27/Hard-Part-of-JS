//Ways to create Async functions

// async function hello() {
//     return 'Hello';
// }

// let hello = async () => 'Hello world';

// // console.log(hello());
// hello().then((result) => {
//     console.log(result);
// })

async function test() {
    console.log("A");
    await console.log("B"); // output-> A B D E C
    console.log("C");

}

test()
console.log("D");
console.log("E");