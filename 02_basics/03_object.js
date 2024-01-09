const mySum = Symbol("key1")
// console.log(typeof mySum);

const jsUser = {
    name : "aryan",
    "full name": "Aryan Bhagat",
    [mySum]: "mykey1",
    age : 22,
    location: "madhepura",
    email: "aryanbhagat7631@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ['monday', 'tuesday'] 
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser['full name']);
// console.log(typeof jsUser[mySum]);

jsUser.email = 'aaaa@gmail.com'
// Object.freeze(jsUser)

// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(jsUser.greetingTwo());











