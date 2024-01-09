const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const bigNumber = 324564664468678n
// console.log(bigNumber);


// Array Object Function

const arr1 = ["shiva", "ram", "krishna"];
let myobj = {
    name: "aryan",
    age: 22,
}
const myfunction = function () {
        console.log("hello world");
}
// console.log(typeof arr1);
// console.log(typeof myobj);
// console.log(typeof myfunction);

let newscore = 33
let currentscore = newscore
currentscore = 45

// console.log(newscore);
// console.log(currentscore);

let newobj = {
    name: "pushparaj",
    agentcode: 625,
}
let currentobj = newobj

newobj.agentcode = 7631

console.log(newobj.agentcode);
console.log(currentobj.agentcode);






