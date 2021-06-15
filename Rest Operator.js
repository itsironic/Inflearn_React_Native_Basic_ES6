// Rest Operator

//ES5
function printNums1(num1, num2) {
    console.log(num1, num2);
}

printNums1(1, 2, 3, 4, 5);

//ES6
function printNums2(num1, ...num5) {
    console.log(num1, num5);
}

printNums2(1, 2, 3, 4, 5);