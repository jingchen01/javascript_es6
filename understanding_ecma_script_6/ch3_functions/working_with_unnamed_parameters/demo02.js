function pick(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}


let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2016
};
let bookData = pick(book, ['title', 'author', 'year']);
console.log(bookData.title); // undefined
console.log(bookData.author); // "Nicholas C. Zakas"
console.log(bookData.year); // 2016