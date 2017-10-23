var doSomething = function doSomethingElse() {
// empty
};
var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function () {
        console.log(this.name);
    }
};
console.log(doSomething.name); // "doSomethingElse"
console.log(person.sayName.name); // "sayName"
console.log(person.firstName.name); // "get firstName"