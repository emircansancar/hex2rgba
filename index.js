const hex2RGBA = (hex, alpha) => {
    //Checks the validity of hex
    if (!/^#?([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        throw new Error('invalid hex value');
    }

    //Returns Nan if the Number function is not valid
    //NaN javascript too; is the only value that is not equal to itself.
    //Alternative isNan(value)  
    alpha = Number(alpha);
    if (alpha !== alpha || alpha < 0 || 1 < alpha) {
        throw new Error('invalid alpha value');
    }

    //Format alpha
    if (0 < alpha && alpha < 1) {
        alpha = alpha.toString().substring(1);
    }

    //Convert 3 digits to 6 digits
    const expandedFormRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(expandedFormRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    //Hex split
    const regexResponse = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    //rgba Object
    const rgba = {
        r: parseInt(regexResponse[1], 16),
        g: parseInt(regexResponse[2], 16),
        b: parseInt(regexResponse[3], 16),
        a: alpha
    };

    //return result
    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
module.exports = hex2RGBA;