// Class

class Person {
    constructor(region_, gender_) {//instance: class의 껍데기
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-nyeong') {
        console.log(val);
    }
}

let korean = new Person('Korea', 'Male')

//console.log(korean);

korean.gender = 'Female';

//console.log(korean);

//korean.greetings();

//extends: 부모 class에서 자식 class로 상속
class American extends Person {
    constructor(region_, gender_, language_) {
        super(region_, gender_);//super: 부모 class의 룰을 따르는 구문
        this.language = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'Female', 'English')

console.log(american)

american.greetings();