// Arrow Function

let array = [1, 2, 3, 4, 5];

//ES5
let twice1 = array.map(function(val){
    return val*2;
})

console.log(twice1);

//ES6
let twice2 = array.map(v=>v*2);

console.log(twice2);

//map: 배열객체내장함수
let twice3 = array.map(v=>{
    if (v % 2 === 0) {
        console.log('even number')
    } else {
        console.log('odd number')
    }
});

console.log(twice3);

//map 함수는 파라미터로 전달된 함수를 인자로 받는데 함수의 두번째 인자가 배열의 인덱스값이다
let twice4 = array.map((v, i)=>{
    console.log(`i: ${i}, v: ${v}`)
});