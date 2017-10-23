/*
the value
of key cannot be changed inside the loop. The for-in and for-of loops
work with const because the loop initializer creates a new binding on each
iteration through the loop rather than attempting to modify the value of an
existing binding (as was the case in the for loop example).
 */
var funcs = [],
    object = {
        a: true,
        b: true,
        c: true
    };
// doesn't cause an error
for (const key in object) {
    funcs.push(function () {
        console.log(key);
    });
}
funcs.forEach(function (func) {
    func(); // outputs "a", then "b", then "c"
});