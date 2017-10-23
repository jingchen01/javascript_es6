/**
 * ECMAScript 6 makes fetching flags easier by adding a flags property
 to pair with the source property. Both properties are prototype accessor
 properties with only a getter assigned, making them read-only. The flags
 property makes inspecting regular expressions easier for debugging and
 inheritance purposes.
 A late addition to ECMAScript 6, the flags property returns the string
 representation of any flags applied to a regular expression.
 * @type {RegExp}
 */
let re = /ab/g;
console.log(re.source); // "ab"
console.log(re.flags); // "g"