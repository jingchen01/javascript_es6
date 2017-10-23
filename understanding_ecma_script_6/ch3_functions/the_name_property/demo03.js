var doSomething = function () {
// empty
};

console.log(doSomething.name); // doSomething
console.log(doSomething.bind().name); // "bound doSomething"
console.log((new Function()).name); // "anonymous"
