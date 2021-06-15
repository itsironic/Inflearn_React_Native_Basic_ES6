// // Spread Operator의 쓰임

// function sum1 (x, y, z) {
//     return x+y+z;
// }

// console.log(sum1(1, 2, 3));

// let array1 = [10, 20, 30];

// //ES5
// console.log(sum1.apply(null, array1));

// //ES6, Spread Operator
// console.log(sum1(...array1));


// function sum2 (a, b, c, d, e) {
//     return a+b+c+d+e;
// }

// let array2 = [20, 30];

// console.log(
//     sum2(10, ...array2, 40, 50)
// )

// let face = ['eyes', 'nose', 'mouth'];
// let head = ['hair', ...face, 'ears'];

// console.log(head);

// let array3 = [1, 2, 3];
// let copiedArray3 = array3;
// copiedArray3.push(4)

// console.log(array3);//원본에도 4가 push됨
// console.log(copiedArray3);


// let array4 = [1, 2, 3];
// let copiedArray4 = [...array4];//Spread Operator 사용시
// copiedArray4.push(4)

// console.log(array4);//원본은 유지하고,
// console.log(copiedArray4);//복사본만 4를 push함

let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

let newDrinks = {
    ...drinks,
    lemon: 'tea',
    orange: 'juice',
}

console.log(newDrinks)