let value1 = 25,
    value2 = 50;
console.log(Math.max(value1, value2)); // 50


let values = [25, 50, 75, 100];
console.log(Math.max.apply(Math, values)); // 100

values = [25, 50, 75, 100];
// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max(...values)); // 100