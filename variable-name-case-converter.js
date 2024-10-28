const main = () => {
    const selectedCase = toKebabCase(process.argv[2]);
    const input = process.argv[3];
    const debugging = (process.argv[4] || "").toLowerCase();
    
    if (debugging === 'debug=true') {
        debug("List words", listWords(input));
        debug("Camel case", toCamelCase(input));
        debug("Kebab case", toKebabCase(input));
        debug("Pascal case", toPascalCase(input));
        debug("Pascal snake case", toPascalCase(input, snake=true));
        debug("Screaming snake case", toSnakeCase(input, scream=true));
        debug("Snake case", toSnakeCase(input), end=true);
        return;}
        
    const cases = [
        "camel",
        "kebab",
        "pascal",
        "pascal-snake",
        "screaming-snake",
        "snake"];
    
    if (selectedCase === 'help') {
        console.log("1st argument is one of the following:");
        console.log(` - ${cases.join(", ")}`);
        console.log("\n2nd argument is the string that will be converted.");
        console.log("\nExample: node format-to-case.js snake 'I love pizza'")
        console.log(" - expected output: i_love_pizza")
        return;}

    if (!cases.includes(selectedCase)) {
        console.log(
            `Select one of the available options: ${cases.join(", ")}`)
        return;}
    
    if (!input) {
        console.log("Please provide a string as an argument.");
        return;}

    switch(selectedCase) {
        case "camel":
            console.log(toCamelCase(input));
            return;
        case "kebab":
            console.log(toKebabCase(input));
            return;
        case "pascal":
            console.log(toPascalCase(input));
            return;
        case "pascal-snake":
            console.log(toPascalCase(input, snake=true));
            return;
        case "screaming-snake":
            console.log(toSnakeCase(input, scream=true));
            return;
        case "snake":
            console.log(toSnakeCase(input));}}

const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}

const listWords = (str) => {
    return removeAccents(str)
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/, ' ')
        .replace(/^\s+|\s+$/, '')
        .split(' ')
        .filter(e => e != '');}

const toCamelCase = (str) => {
    list = listWords(str);
    if (list.length === 1)
        return list[0];
    words = [ list[0] ];
    return [words[0], ...list
            .splice(1).map(e => e[0] && e[0].toUpperCase() + e.slice(1))]
            .join('')}
    
const toKebabCase = (str) => {
    return listWords(str)
        .join('-');}
    
const toPascalCase = (str, snake=false) => {
    list = listWords(str);
    list[0] = list[0][0].toUpperCase() + (list[0].slice(1) || "")
    if (list.length === 1)
        return list[0];
    words = [ list[0] ];
    if (list.length > 1) {
        words = [words[0], ...list
            .splice(1).map(e => e[0] && e[0].toUpperCase() + e.slice(1))]}
    if (snake)
        return words.join('_');
    return words.join('');}

const toSnakeCase = (str, scream=false) => {
    list = listWords(str);
    if (scream)
        list = list.map(e => e.toUpperCase());
    return list.join('_');}

const debug = (name, result, end=false) => {
    console.log(name+":");
    console.log(" -", result);
    !end && console.log();}

main();
