var c = 200
let a = 3000

if (true) {
    // let a = 10
    const b = 20
    // c = 20 (this type of value also comes out of scope)
    var c  = 30
    // console.log("INNER : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username +  website);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        // console.log(username + " " + website);
    }
}
// console.log(username);

// console.log(addone(9));

function addone(num1) {
    return num1 + 1
}

// console.log(addtwo(2));

const addtwo = function(num1){
    return num1 + 2
}

const user = {
    username: "hitesh",
    price: "999",
    
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}
user.welcomeMessage()
user.username = "sad"
user.welcomeMessage()
console.log(this);
