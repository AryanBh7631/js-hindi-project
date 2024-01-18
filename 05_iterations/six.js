// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach (function (val) {
//     // console.log(`The Value is ${val}`);
//     return val
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function add(num) {
//     console.log(num);
// }
// add()

// myNums.forEach((nums) => {
//     console.log(nums > 4);
// });

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);
