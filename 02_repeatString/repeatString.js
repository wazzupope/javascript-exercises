const repeatString = function(string, num) {
    let newString = string;
    if (num === 0) {
        return "";
    }
    else if (num < 0) {
        return "ERROR";
    }
    else if (num === 1) {
        return string;
    }
    else {
        for (i = 1; i < num; i++) {
            newString += string;
        };
        return newString;
    };
};
// Do not edit below this line
module.exports = repeatString;
