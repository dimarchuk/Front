var str = "#ff0044";

/**
 *
 * @param str
 * @returns {Array}
 */
function hexToRGB(str) {
    var rez = [];
    var count = str.length;
    if (count <= 7) {
        for (var i = 1; i < count; i += 2) {
            rez.push(parseInt(str[i] + str[i + 1], 16));
        }
        return rez;
    } else return "Невірні дані";
};

hexToRGB(str);
