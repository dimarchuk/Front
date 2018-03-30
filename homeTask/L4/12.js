function toCamelCase(str) {
    if (str.indexOf('-') == 0) {
        str = str.replace('-', '');
    }
    var arr = str.split(/[-, ]/);
    var newStr = '';

    arr.forEach(function (value, iter) {
        if (iter === 0) {
            newStr += value;
        } else {
            newStr += value.charAt(0).toUpperCase() + value.substr(1);
        }

    });
    return newStr;
}

console.log(toCamelCase("background-color")); // 'backgroundColor';
console.log(toCamelCase("list-style-image")); // 'listStyleImage';
console.log(toCamelCase("-webkit-transition")); // 'WebkitTransition';