const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(a) {
	let arr = a;
  return (arr.reduce((x, y) => x + y, 0));
};

const multiply = function(a) {
  let arr1 = a;
  return (arr1.reduce((x, y) => x * y, 1));
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = function(a) {
	let total = a;
  if (a === 0 || a === 1) {
    return 1;
  }
  else if (a < 0) {
    return "error";
  }
  else {
    for (i = (a - 1); i >= 1; i--) {
      total *= i;
    };
    return total;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
