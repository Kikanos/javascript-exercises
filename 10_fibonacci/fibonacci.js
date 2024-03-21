const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else {
    let fibo_arr = [0, 1];
    for (let i = 0; i <= num; i++) {
      fibo_arr.push(fibo_arr[i] + fibo_arr[i + 1]);
    }

    return fibo_arr[num];
  }
};

// Do not edit below this line
module.exports = fibonacci;
