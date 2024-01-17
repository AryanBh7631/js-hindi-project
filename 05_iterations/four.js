const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
        console.log(programming[key]);
}
const myObject3 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}
for (const key in myObject3) {
    console.log(myObject3[key]);
}

const namely = "aryan dotco"

for (const key of namely) {
    console.log(`Each greet is ${key}`);
}

for (const key in namely) {
    console.log(`Each greet is ${namely[key]}`);
}


