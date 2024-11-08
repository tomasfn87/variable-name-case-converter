export const RegEx = {
    allUpperCase: /^[A-Z]+(?: [A-Z]+)*$/,
    camelAndPascal: /^(?:[a-z][A-Za-z]*|[A-Z][a-z]*(?:[A-Z][a-z]*)*)$/,
    camelAndPascalUpperUpperContact: /([A-Z])([A-Z])/g,
    camelAndPascalLowerUpperContact: /([a-z])([A-Z])/g,
    general: /^(?:[a-z]+|[A-Z]+|[A-Z][a-z]+)(?:(?:[-_]|[ ])(?:[a-z]+|[A-Z]+|[A-Z][a-z]+))*$/,
    inconsistentCapitalization: /^(?:[a-z]+|[A-Z]+|[A-Z][a-z]+)(?:(?:[-_]|[ ])(?:[a-z]+|[A-Z]+|[A-Z][a-z]+))*$/,
    notAllowedChars: /[^A-Za-z0-9_ -]/g,
    notLowerCaseOrNumber: /[^a-z0-9 ]/g,
    pascalSnake: /^[A-Z][a-z]+(?:_[A-Z][a-z]+)*$/,
    screamingSnake: /^[A-Z]+(?:_[A-Z]+)*$/,
    trailingEmptySpaces: /^\s+|\s+$/,
    twoOrMoreEmptySpaces: /\s+/};

export const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}

export const validateCases = (str) => {
    str = removeAccents(str).replace(RegEx.notAllowedChars, '');
    return RegEx.inconsistentCapitalization.test(str)
        || RegEx.camelAndPascal.test(str)
        || RegEx.pascalSnake.test(str)
        || RegEx.general.test(str);}

export const listWords = (str) => {
    if (RegEx.inconsistentCapitalization.test(str))
        str = str.toLowerCase();
    if (RegEx.screamingSnake.test(str))
        return str.toLowerCase().split('_');
    if (RegEx.allUpperCase.test(str))
        return str.toLowerCase().split(' ');
    return removeAccents(str)
        .replace(RegEx.camelAndPascalUpperUpperContact, '$1 $2')
        .replace(RegEx.camelAndPascalLowerUpperContact, '$1 $2')
        .toLowerCase()
        .replace(RegEx.notLowerCaseOrNumber, ' ')
        .replace(RegEx.twoOrMoreEmptySpaces, ' ')
        .replace(RegEx.trailingEmptySpaces, '')
        .split(' ')
        .filter(e => e != '');}

export const toCamelCase = (str) => {
    const list = listWords(str);
    if (list.length === 1)
        return list[0];
    const words = [ list[0] ];
    return [words[0], ...list
            .splice(1).map(e => e[0] && e[0].toUpperCase() + e.slice(1))]
            .join('')}

export const toKebabCase = (str) => {
    return listWords(str)
        .join('-');}

export const toPascalCase = (str, mode="") => {
    const list = listWords(str);
    list[0] = list[0][0].toUpperCase() + (list[0].slice(1) || "")
    if (list.length === 1)
        return list[0];
    let words = [ list[0] ];
    if (list.length > 1) {
        words = [words[0], ...list
            .splice(1).map(e => e[0] && e[0].toUpperCase() + e.slice(1))]}
    if (mode == "snake")
        return words.join('_');
    return words.join('');}

export const toSnakeCase = (str, mode="") => {
    let list = listWords(str);
    if (mode == "screaming")
        list = list.map(e => e.toUpperCase());
    return list.join('_');}

export const debug = (name, result, end=false) => {
    console.log(name+":");
    console.log(" -", result);
    !end && console.log();}
