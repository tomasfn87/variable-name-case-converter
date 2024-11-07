import { debug, listWords, toCamelCase, toKebabCase, toPascalCase,
    toSnakeCase, validateCases }
    from './variable-name-case-converter.js';

(() => {
    const cases = [
        "lower case separated by spaces",
        "upper case separated by spaces",
        "camel",
        "kebab",
        "pascal",
        "pascal-snake",
        "screaming-snake",
        "snake"];
        
    let input = process.argv[3];
    if (!validateCases(input)) {
        console.log("Error: input must be in one of the following formats:");
        console.log(`- ${cases.join("\n- ")}`);
        return;}

    const debugging = (process.argv[4] || "").toLowerCase();
    if (debugging === 'debug=true') {
        debug("List words", listWords(input));
        debug("Camel case", toCamelCase(input));
        debug("Kebab case", toKebabCase(input));
        debug("Pascal case", toPascalCase(input));
        debug("Pascal snake case", toPascalCase(input, "snake"));
        debug("Screaming snake case", toSnakeCase(input, "screaming"));
        debug("Snake case", toSnakeCase(input), true);
        return;}
            
    if (!validateCases(process.argv[2])) {
        console.log("Error: case must be in one of the following formats:");
        console.log(`- ${cases.slice(2).join("\n- ")}`);
        return;}

    const selectedCase = toKebabCase(process.argv[2]);

    if (selectedCase === 'help') {
        console.log("1st argument is one of the following:");
        console.log(`- ${cases.join("\n- ")}`);
        console.log("\n2nd argument is the string that will be converted.");
        console.log("\nExample: node main.js snake 'I love pizza'")
        console.log("- expected output: i_love_pizza")
        return;}

    if (!cases.includes(selectedCase)) {
        console.log(
            `Select one of the available options: \n- ${cases.slice(2).join("\n- ")}`)
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
            console.log(toPascalCase(input, "snake"));
            return;
        case "screaming-snake":
            console.log(toSnakeCase(input, "screaming"));
            return;
        case "snake":
            console.log(toSnakeCase(input));}})();
