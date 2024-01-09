const marvelHeroes = ["ironman", "superman", "batman"]
const dcHeroes = ["blackjack", "loki", "thor"]
// console.log(typeof marvelHeroes);
// console.log(typeof dcHeroes);

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const newHeroes = [...marvelHeroes, ...dcHeroes]

// console.log(newHeroes);

const real_heroes = [1, 2, 3, [5, 1], 8, 9, [0, -3]]

// console.log(real_heroes);
// console.log(real_heroes.flat(Infinity).join());
// console.log(real_heroes.length);
// console.log(Array.isArray(["hitesh"]));
// console.log(Array.isArray("hitesh"));
// console.log(Array.from("Hitesh"));

// console.log(Array.from { name: "aryan" } );

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





