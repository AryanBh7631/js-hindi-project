// let index = 0

// while(index <= 10){

//     console.log(`Value of index is ${index}`);

//     index = index + 2 ;

// }

// while (2==2) {
//     console.log("hello world");
// }

// let myArray = ['flash', 'batman', 'superman']

// let arr = 0 

// while (arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 1

// do {
//     console.log(`Score is ${score}`);
// } while (score <= 10);


// ********************************// ****************************************** // ****************************** //

// let index = 11

// do {
//     console.log(`Value is ${index}`);
//     index = index + 1
// } while (index < 10);

const myArray = ["four", "two", "three"]
for (const key of myArray) {
    console.log(key);
}


const myObject = {
    name: "aryan",
    age: 20,
    location: "singheshwar asthan"
}

for (const key in myObject) {
    console.log(key);
}


// const arr = ["pen", "pencil", "book"]

// arr.forEach (function (val)) {
//     console.log(val);
// }

const arr2 = [1, 2, 3, 4, 5]

for (const samsung of arr2) {
    console.log(samsung);
}

const namely = "aryan dotco"

for (const key in namely) {
    // if (key = "d") {
    //     console.log("a detected");
    // }
    console.log(`Each greet is ${key}`);
}

const map = new Map()

map.set('IN', "India")
map.set('UN', "United Nation")
map.set('USA', "United States of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}





