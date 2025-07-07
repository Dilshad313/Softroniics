const pattern = [
  [1,2,3,4,5],
  [2,'','','',5],
  [3,'', 3, '', ''],
  [4, '', '', '', ''],
  [5, 4, 3, 2, 1]
];

for (let row of pattern) {
  let line = row.map(val => (val === '' ? ' ' : val)).join(' ');
  console.log(line);
}

