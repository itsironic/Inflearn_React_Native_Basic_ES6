// for...of...
let array = [10, 20, 30, 40, 50];

//ES5
for (let val in array) {
    console.log(array[val]);
}

//ES6
for (let val of array) {
    console.log(val);
}

let object = {
    a: 1,
    b: 2,
    c: 3
}

for (let val in object) {
    console.log(val);
}