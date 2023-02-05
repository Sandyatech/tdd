
function numToRoman(number) {
    //if number is more than 3000 no need to define
    if (number === undefined) throw new Error("Undefined number");
    if ((number > 3000) || (number <= 0)) throw new Error("please enter the numbers between 1-3000");
    //define some roman values
    const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

    //117=CXVII
    //786=DCCLXXXVI

    return Object.keys(roman).reduce((acc, key) => {
        while (number >= roman[key]) {
            acc += key;
            number -= roman[key];
        }
        return acc;
    }, '');
}
    

module.exports = numToRoman;
