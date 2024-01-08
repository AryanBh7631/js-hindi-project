const myArr = [0, 1, 2, 3, 4, 5]

// console.log(typeof myArr);
// console.log(myArr[2]);

myArr.push(6)
// console.log(myArr);

myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(10));

// console.log(myArr.join());
// console.log(myArr.slice(0, 3));
// console.log(myArr.join());

// console.log(myArr.splice(0, 3));
// console.log(myArr.join());

const marvelHeroes = ["ironman", "superman", "batman"]
const dcHeroes = ["blackjack", "loki", "thor"]
// console.log(typeof marvelHeroes);
// console.log(typeof dcHeroes);

const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes);

const newHeroes = [...marvelHeroes,...dcHeroes]
console.log(newHeroes);



