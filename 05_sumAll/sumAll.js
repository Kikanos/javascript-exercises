const sumAll = function (a, b) {
  let count = 0;

  if (typeof a !== "number" || typeof b !== "number" || a * b < 0) {
    return "ERROR";
  } else {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    for (let i = min; i <= max; i++) {
      count += i;
    }
    return count;
  }
};

// Do not edit below this line
module.exports = sumAll;
