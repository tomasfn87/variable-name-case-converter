export const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}

export const listWords = (str) => {
    if (/^[A-Z]+(?:_[A-Z]+)*$/.test(str))
        return str.toLowerCase().split('_');
    if (/^[A-Z]+(?: [A-Z]+)*$/.test(str))
        return str.toLowerCase().split(' ');
    return removeAccents(str)
        .replace(/([A-Z])([A-Z])/g, '$1 $2')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/, ' ')
        .replace(/^\s+|\s+$/, '')
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
