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
    if (!username) {
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage("Aryan"));

function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 600));

const loginUser = {
    username: "Aryan",
    id: 763149,
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(loginUser)
handleObject({
    username: "Aryan King",
    price: 299
})

const newArray = [200, 400, 600]

function returnSecondaryValue(getArray) {
    return getArray[2]
}
console.log(returnSecondaryValue(newArray));
console.log(returnSecondaryValue([50, 40, 30, 20]));





