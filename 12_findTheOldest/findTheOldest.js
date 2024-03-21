const findTheOldest = function (arr) {
  const date = new Date();
  for (person of arr) {
    if (person.yearOfDeath) {
      continue;
    } else {
      person.yearOfDeath = date.getFullYear();
    }
  }

  const max_age = arr
    .map((person) => person.yearOfDeath - person.yearOfBirth)
    .reduce((a, b) => Math.max(a, b));

  const result = arr.find(
    (person) => person.yearOfDeath - person.yearOfBirth === max_age
  );

  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
