import { debug, listWords, RegEx, toCamelCase, toKebabCase, toPascalCase,
    toSnakeCase, validateCases }
    from './variable-name-case-converter.js';
import { color }
    from './tools/color.js';

(() => {
    const cases = [
        "natural language",
        "lower case separated by spaces",
        "upper case separated by spaces",
        "camel",
        "kebab",
        "pascal",
        "pascal-snake",
        "screaming-snake",
        "snake"];

    const selectedCase = toKebabCase(process.argv[2]);
    if (selectedCase === 'help') {
        console.log("1st argument is one of the following:");
        console.log(`- ${cases.join("\n- ")}`);
        console.log("\n2nd argument is the string that will be converted.");
        color.log("default", "\nExample: ");
        color.log("green", "node");
        color.log("default", " main.js snake ");
        color.log("yellow", "'I love pizza'");
        console.log();
        color.log("default", "- expected output: ")
        color.log("green", "i_love_pizza");
        console.log();
        return;}

    let input = process.argv[3];
    if (!validateCases(input)) {
        console.log("Error: input must be in one of the following formats:");
        console.log(`- ${cases.join("\n- ")}`);
        return;}
    
    if (selectedCase === 'debug') {
        debug("List words", listWords(input));
        debug("Camel case", toCamelCase(input));
        debug("Kebab case", toKebabCase(input));
        debug("Pascal case", toPascalCase(input));
        debug("Pascal snake case", toPascalCase(input, "snake"));
        debug("Screaming snake case", toSnakeCase(input, "screaming"));
        debug("Snake case", toSnakeCase(input), true);
        return;}
            
    const skip = cases.indexOf("camel");

    if (!validateCases(process.argv[2])) {
        console.log("Error: case must be in one of the following formats:");
        console.log(`- ${cases.slice(skip).join("\n- ")}`);
        return;}

    if (!cases.includes(selectedCase)) {
        console.log("Select one of the available options: ");
        console.log(`- ${cases.slice(skip).join("\n- ")}`);
        return;}

    if (!input) {
        console.log("Please provide a string as an argument.");
        return;}

    input = input.replace(RegEx.notAllowedChars, '');

    switch(selectedCase) {
        case "camel":
            color.log("green", toCamelCase(input));
            console.log();
            return;
        case "kebab":
            color.log("green", toKebabCase(input));
            console.log();
            return;
        case "pascal":
            color.log("green", toPascalCase(input));
            console.log();
            return;
        case "pascal-snake":
            color.log("green", toPascalCase(input, "snake"));
            console.log();
            return;
        case "screaming-snake":
            color.log("green", toSnakeCase(input, "screaming"));
            console.log();
            return;
        case "snake":
            color.log("green", toSnakeCase(input));
            console.log();}})();
