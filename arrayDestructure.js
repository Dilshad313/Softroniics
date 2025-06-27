// ARRAY DESTRUCTURING

let arr1=[1,2,3,4,5];
let [a,b,c,d,e]=arr1;
console.log(a);
console.log(c);

// SKIPPING ELEMENTS BY COMA

let arr2=[2,4,5,6]
let [m, ,n] = arr2;
console.log(n);

// rest operator

let arr3=[2,4,5,6,7];
let [first,second,...rest]=arr3;
console.log(rest);

// CONCATS

let arr4=[1,3];
let arr5=[3,4,5];
console.log(arr1.concat(arr5));

// foreachloop

let arr6=[2,3,4,5];
arr6.forEach(num => console.log(num*2));

// Map()

let arr7=[1,2,3,4];
let squared=arr7.map(num=> num*num);
console.log(squared);

// filter()

let arr8=[1,3,4,5];
let filtered=arr8.filter(num=>num<5);
console.log(filtered);

// find()

let arr9=[1,3,4,7];
let find=arr9.find(num=>num>2);
console.log(find);

// sort()

let arr11=[1,5,4,2,8,5,0];
arr1.sort();
console.log(arr11);

// reverse()

let arr13= [1,4,3,8,9,0,6];
arr13.reverse();
console.log(arr13);