/*
let Declarations in Loops
A let declaration simplifies loops by effectively mimicking what the IIFE
does in the previous example. On each iteration, the loop creates a new
variable and initializes it to the value of the variable with the same name
from the previous iteration. That means you can omit the IIFE altogether
and get the results you expect
 */

var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func(); // outputs 0, then 1, then 2, up to 9
});

/* Output:

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