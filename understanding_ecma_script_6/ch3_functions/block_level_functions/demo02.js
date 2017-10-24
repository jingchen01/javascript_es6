/*

Block-level functions are similar to let function expressions in that the
function definition is removed once execution flows out of the block in
which it’s defined. The key difference is that block-level functions are
hoisted to the top of the containing block. Function expressions that use
let are not hoisted

 */
"use strict";
if (true) {
    console.log(typeof doSomething); // throws an error
    let doSomething = function () {
// empty
    }
    doSomething();
}
console.log(typeof doSomething);


/* out:

/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch3_functions/block_level_functions/demo02.js:3
    console.log(typeof doSomething); // throws an error
                       ^

ReferenceError: doSomething is not defined
    at Object.<anonymous> (/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch3_functions/block_level_functions/demo02.js:3:24)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:383:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:496:3

 */