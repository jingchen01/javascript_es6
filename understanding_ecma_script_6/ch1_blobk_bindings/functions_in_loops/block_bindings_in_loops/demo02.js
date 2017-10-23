/*---------------*

immediately invoked function expressions
(IIFEs) inside loops to force a new copy of the variable they want to
iterate over to be created,

*---------------*/

var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push((function (value) {
        return function () {
            console.log(value);
        }
    }(i)));
}
funcs.forEach(function (func) {
    func(); // outputs 0, then 1, then 2, up to 9
});

/** Output:

 0
 1
 2
 3
 4
 5
 6
 7
 8
 9

 */