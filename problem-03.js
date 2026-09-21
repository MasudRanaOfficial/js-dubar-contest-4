function titleCaseSentence(str) {
  if (typeof str !== "string") {
    return "";
  }

  const trimmed = str.trim();
  if (trimmed.length === 0) {
    return "";
  }

  const words = trimmed.split(/\s+/);

  const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );

  return capitalizedWords.join(" ");
}

console.log(titleCaseSentence("hello world"));
// "Hello World"

console.log(titleCaseSentence("a short sentence"));
// "A Short Sentence"

console.log(titleCaseSentence("  multiple   spaces    between words  "));
// "Multiple Spaces Between Words"

console.log(titleCaseSentence("hELLo WoRLD"));
// "Hello World"

console.log(titleCaseSentence("   "));
// ""
