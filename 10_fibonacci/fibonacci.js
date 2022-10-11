const fibonacci = function(num) {
    let prevFibo = 1;
    let newFibo = 1;
    for (i = 0; i < num; i++) {
        if (num === 1) {
            return (prevFibo + newFibo);
        }
        else if (num < 1) {
            return 1;
        }
        else {
            newFibo += prevFibo;
            if ((num - 1) === 1) {
                return newFibo;
            }
            else {
                prevFibo = newFibo;
            };
        };
    };
};

// Do not edit below this line
module.exports = fibonacci;
