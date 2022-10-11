const fibonacci = function(num) {
    let prevFibo = 1;
    let newFibo = 1;
    let currentFibo = 1;
    for (i = 0; i < num; i++) {
        if (num == 1 || num == 2) {
            return 1;
        }
        else if (num <= 0) {
            return "OOPS";
        }
        else {
            newFibo += prevFibo;
            if (i == (num - 3)) {
                return newFibo;
            }
            else {
                prevFibo = currentFibo;
                currentFibo = newFibo;
            };
        };
    };
};

// Do not edit below this line
module.exports = fibonacci;
