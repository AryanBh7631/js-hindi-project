var c = 200

let a = 3000

if (true) {
    // let a = 10
    const b = 20
    // c = 20 (this type of value also comes out of scope)
    var c  = 30
    console.log("INNER : ", a);
}


// console.log(a);
// console.log(b);

console.log(c);



