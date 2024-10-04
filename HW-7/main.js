function doubleLetter(str) {
    let result = '';
    for (let char of str) {
        result += char.repeat(2);
    }
    return result;
}




function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength);

    return toLeft ? padding + str : str + padding;
}



function camelCase(str, separator) {
    return str.split(separator)
              .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join('');
}