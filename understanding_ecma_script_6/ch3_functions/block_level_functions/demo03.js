// ECMAScript 6 behavior
if (true) {
    console.log(typeof doSomething); // "function"
    function doSomething() {
// empty
    }

    doSomething();
}
console.log(typeof doSomething); // "function"