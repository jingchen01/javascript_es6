// in a browser
let RegExp = "Hello!";
console.log(RegExp); // "Hello!"
console.log(window.RegExp === RegExp); // false
const ncz = "Hi!";
console.log(ncz); // "Hi!"
console.log("ncz" in window); // false