function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}
sayMyName()

function addTwoNumbers(number1, number2){
    return number1 + number2
}

console.log(addTwoNumbers(3, 5));

function multiply(number4, number5) {
    return number4 * number5
}

let user = multiply(2,3)
console.log(user);

function logInUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage());





