function compressCharacters(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  let currentChar = str[0];
  let count = 1;
  let result = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      result += currentChar + (count > 1 ? count : "");

      currentChar = str[i];
      count = 1;
    }
  }

  result += currentChar + (count > 1 ? count : "");

  return result;
}

console.log(compressCharacters("aaabcc")); // a3bc2
