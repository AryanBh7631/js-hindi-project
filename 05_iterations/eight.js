// const myNumbers = [1, 2, 3]

// // const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myTotal = myNumbers.reduce( (acc, currval) => acc + currval, 0 )

// console.log(myTotal);


const shoppingCart = [

    {
        itemName : "js",
        price : 1299
    },
    {
        itemName : "python",
        price : 1099
    },
    {
        itemName : "html",
        price : 299
    },
    {
        itemName : "mobile dev course",
        price : 5298
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(myTotal);



