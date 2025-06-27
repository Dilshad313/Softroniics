const arr = [1, 3, 4, 5, 6, 98, 99, 100];

let sorted = arr.sort((a,b) =>a-b);
console.log(sorted)
let longest = 1;
let count = 1;

for (let i = 1; i < sorted.length; i++) {
  if (sorted[i] === sorted[i + 1])
  {
    console.log("Not a Consecutive");
  } 

  if (sorted[i]+1 === sorted[i+1]) { 
    count++;
    if (count > longest) {
      longest = count;
    }
  } else {
    count = 1;
  }
}

console.log(longest);
