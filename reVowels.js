// replace vowels with * 
function reVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      result += "*";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(reVowels("JavaScript"));
