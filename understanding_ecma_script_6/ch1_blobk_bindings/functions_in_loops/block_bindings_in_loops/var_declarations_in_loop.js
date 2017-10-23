var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func(); // outputs the number "10" ten times
});


/** Output:
 10
 10
 10
 10
 10
 10
 10
 10
 10
 10

 */