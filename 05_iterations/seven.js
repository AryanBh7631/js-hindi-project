const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {return num + 10} )

// // console.log(newNums);

// const arr = []
// const newNums = myNumbers.forEach( (num) => {
//     // if (num > 4) {
//     //     arr.push(num + 10)
//     // }
//     arr.push(num + 10)
// });
// console.log(arr);


// const newNums = myNumbers.filter( (num) => num > 4 )
// console.log(newNums);

const newNums = myNumbers.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num > 40 )
console.log(newNums);


