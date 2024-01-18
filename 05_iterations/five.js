const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach (function (val) {
    console.log(`The Value is ${val}`);
})

// // coding.forEach ( (val) => {
// //     console.log(val);
// // })

// function grape(val, index, arr) {
//     console.log(val, index, arr);
// }

// coding.forEach(grape);

// // coding.forEach(function(){
// //     console.log(item);
// // })

// const table = ["aryan", "vishnu", "satyam"]

// table.forEach(function (val, one, two){
//     console.log(val, one, two);
// })

// const StringName = ["Aryan raj"]
// StringName.forEach( (val) => {
//     console.log(val);
// } )

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "ecmascript",
        languageFile : "ecma"
    }
]

myCoding.forEach( (val) => {
    console.log(val.languageName);
} )



