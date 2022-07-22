const reverseString = function(string) {
    let str = string;
    let stringArray = [];
    let revArray = [];
    for (i = 0; i < str.length; i++) {
        stringArray[i] = str.charAt(i);
    }
    revArray = stringArray.reverse();
    return revArray.toString();
};

// Do not edit below this line
module.exports = reverseString;
