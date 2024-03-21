const palindromes = function (str) {
  let str_noPunc = str.replace(/[!., ]/g, "").toLowerCase();

  console.log(`removing punctuation : ${str_noPunc}`);

  const arr_str = [...str_noPunc];

  const rev_arr_str = arr_str.reverse();

  const rev_str = rev_arr_str.join("");

  return str_noPunc === rev_str;
};
// Do not edit below this line
module.exports = palindromes;
