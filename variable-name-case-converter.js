function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}

function toKebabCase(str) {
    return removeAccents(str)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .replace(/[_/]/g, '-')
        .replace(/[^a-z0-9-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');}

function main() {
    const input = process.argv[2];
    if (input)
        console.log(toKebabCase(input));
    else
        console.log("Please provide a string as an argument.");}

main();