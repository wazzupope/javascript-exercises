const sumAll = function(int1, int2) {
    if ((typeof int1 !== "number") || (typeof int2 !== "number")) {
        return "ERROR";
    }
    else if ((int1 < 0) || (int2 < 0)) {
        return "ERROR";
    }
    else if (int1 < int2) {
        let sum = int1;
        let greater = int2;
        for (i = (sum + 1); i <= greater; i++) {
            sum += i;
        }
        return sum;
    }
    else if (int2 < int1) {
        let sum = int2;
        let greater = int1;
        for (i = (sum + 1); i <= greater; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        let sum = (int1 + int2);
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
