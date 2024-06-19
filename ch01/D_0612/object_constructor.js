function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");


console.log(myFather)

// property 추가
myFather.nationality = "English";
Person.nationality = "korean"

const myFather2 = new Person("John", "Doe", 50, "blue");

console.log(myFather2)

// Default Value 지정
function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

const mySelf = new Person2("Johnny", "Rally", 22, "green");

console.log(mySelf)

Person.prototype.nationality = "English";

const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myMother)


// 메서드 추가
myMother.changeName = function (name) {
    this.lastName = name;
}

// // object에 메서드 추가
// Person.changeName = function (name) {
//     this.lastName = name;
// }




const mySister = new Person("Anna", "Rally", 18, "green");

// 에러 발생, changeName is not a function
// prototype 에 함수를 정의해야 한다.
// mySister.changeName("Doe");
console.log(mySister)

Person.prototype.changeName = function (name) {
    this.lastName = name;
}

mySister.changeName("Doe");
console.log(mySister)


