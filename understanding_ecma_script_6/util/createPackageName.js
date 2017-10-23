let createPackageName = (input) => {
    return input.toLowerCase().trim().replace(/\s+/g, '_');
};


const input = 'The name Property';
console.log(createPackageName(input));
