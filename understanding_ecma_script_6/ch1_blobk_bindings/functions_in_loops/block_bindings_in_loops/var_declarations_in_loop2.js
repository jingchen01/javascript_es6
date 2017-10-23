var funcs = [],
    object = {
        a: true,
        b: true,
        c: true
    };
for (var key in object) {
    funcs.push(function () {
        console.log(key);
    });
}
funcs.forEach(function (func) {
    func();
});

/* Out:
c
c
c

 */