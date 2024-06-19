function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

Object.prototype.objCustom = function () {};
Person2.prototype.funCustom = function () {};

const mySelf = new Person2("Johnny", "Rally", 22, "green");


for (i of Object.values(mySelf)){
    console.log(i)
}
