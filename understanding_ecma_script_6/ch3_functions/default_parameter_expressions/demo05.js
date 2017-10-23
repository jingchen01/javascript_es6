function add(first = second, second) {
    return first + second;
}

console.log(add(1, 1)); // 2
console.log(add(undefined, 1)); // throws an error

/*
(function (exports, require, module, __filename, __dirname) { function add(first = second, second) {
                                                                                   ^

ReferenceError: second is not defined
    at add (/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch3_functions/default_parameter_expressions/demo05.js:1:84)
    at Object.<anonymous> (/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch3_functions/default_parameter_expressions/demo05.js:6:13)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:383:7)
    at startup (bootstrap_node.js:149:9)
 */