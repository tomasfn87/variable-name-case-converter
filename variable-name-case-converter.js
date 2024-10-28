function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}

function toKebabCase(str) {
    return removeAccents(str)
        .toLowerCase()
        .replace(/[_/]/g, '-')
        .replace(/[^a-z0-9-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');}

const input = process.argv[2];
if (input)
    console.log(toKebabCase(input));
else
    console.log("Please provide a string as an argument.");
