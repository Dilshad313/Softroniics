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



const pattern = [
  [1, 2, 3, 4, 5],
  [2, '', '', '', 5],
  ['', '', 3, '', ''],
  ['', 4, '', '', ''],
  [5, 4, 3, 2, 1]
];

for (let row of pattern) {
  let line = row.map(val => (val === '' ? ' ' : val)).join(' ');
  console.log(line);
}
