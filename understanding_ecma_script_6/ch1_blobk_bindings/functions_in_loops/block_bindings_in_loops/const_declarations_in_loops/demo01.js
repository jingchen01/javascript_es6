var funcs = [];
// throws an error after one iteration
for (const i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

/* Out:

/usr/local/bin/node /Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch1_blobk_bindings/functions_in_loops/const_declarations_in_loops/demo01.js
/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch1_blobk_bindings/functions_in_loops/const_declarations_in_loops/demo01.js:3
for (const i = 0; i < 10; i++) {
                           ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/jingchen/Develop/github/github_workspace/javascript_es6/understanding_ecma_script_6/ch1_blobk_bindings/functions_in_loops/const_declarations_in_loops/demo01.js:3:28)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:383:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:496:3

Process finished with exit code 1


 */