/* Note:

/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])

Parameters
pattern
The text of the regular expression.
flags
If specified, flags can have any combination of the following values:

g
global match; find all matches rather than stopping after the first match
i
ignore case
m
multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)
u
unicode; treat pattern as a sequence of unicode code points
y
sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).

 */

let re1 = /ab/i, // ignore case
// throws an error in ES5, okay in ES6
    re2 = new RegExp(re1, "g"); // global
console.log(re1.toString()); // "/ab/i"
console.log(re2.toString()); // "/ab/g"
console.log(re1.test("ab")); // true
console.log(re2.test("ab")); // true
console.log(re1.test("AB")); // true
console.log(re2.test("AB")); // false

