// const tinderUser = new Object()
// const tinderUser1 = Object()
// console.log(tinderUser1);

const tinderUser = {}

tinderUser.name = "aryan bhagat"
tinderUser.email = "aryan@gmail.com"

// console.log(tinderUser);

const randomUser = {
    email: "light@gmail.com",
    fullname: {
        userfullname:{
            firstname: 'aryan',
            lastname: 'bhagat'
        }
    }
}

// console.log(randomUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2:"b"}
const obj2 = { 3: "c", 4:"d"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const obj5 = Object.assign(obj1, obj2)
// console.log(obj1);


let user = [
    {
        id: "hitesh",
        pass: "123"
    },
    {
        id: "hitesh",
        pass: "456"
    },
    {
        id: "hitesh",
        pass: "789"
    }
]

// console.log(user[1].pass);
// console.log(Object.keys(randomUser));
// console.log(Object.values(randomUser));
// console.log(Object.entries(randomUser));

// console.log(randomUser.hasOwnProperty("email"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aryan_king"

}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

























