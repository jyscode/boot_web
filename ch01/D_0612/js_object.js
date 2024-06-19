const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

name = person.fullName()

console.log(name)

person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase()
}

console.log(person.name())

person.fullName = function () {
    return (this.firstName + " " + this.lastName).toUpperCase()
}

// call by value
console.log(name)

// call by reference
console.log(person.fullName())
