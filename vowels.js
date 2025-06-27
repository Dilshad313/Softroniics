function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i of str) {
    if (vowels.includes(i)) {
      console.log(i);
      
      count++;
    }
  }

  return count;
}

const input = "Hello World";
const count = countVowels(input);
console.log(`Number of Vowels:${count}`);
