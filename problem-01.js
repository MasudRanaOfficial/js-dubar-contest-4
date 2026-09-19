function isAnagram(s1, s2) {
  const cleanS1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  const cleanS2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (cleanS1.length !== cleanS2.length) {
    return false;
  }

  const charCounter = {};

  for (let char of cleanS1) {
    charCounter[char] = (charCounter[char] || 0) + 1;
  }

  for (let char of cleanS2) {
    if (!charCounter[char]) {
      return false;
    }

    charCounter[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("A decimal point", "I'm a dot in place")); // true
console.log(isAnagram("Hello", "world")); // false
