let myDate =new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 12, 5, 3, 2)
// let myCreatedDate = new Date("2023-01-12")
let myCreatedDate = new Date("12-01-2023")
// console.log(myCreatedDate.toDateString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(`${newDate.getDate()} is the date and the time is ${newDate.toTimeString()}`);
console.log(newDate.toLocaleString('default', {weekday:"long",} ));


