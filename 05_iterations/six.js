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

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// const newNums = myNums.filter( function (val) {
//     return val > 4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);

const books = [
    { title: 'One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Two', genre: 'Non-Fiction', publish: 1983, edition: 2006},
    { title: 'Three', genre: 'History', publish: 1983, edition: 2003},
    { title: 'Four', genre: 'History', publish: 1983, edition: 2008},
    { title: 'Five', genre: 'Economics', publish: 1972, edition: 2015}
]
// let UserBooks = books.filter( (bk) => bk.genre === 'History' )
// console.log(UserBooks);



const UserBooks = books.filter( (bk) => {
   return bk.publish === 1983 && bk.edition >= 2003
} )

console.log(UserBooks);


