// Display the String
str1="Hello World";
console.log(str1);

// Print (iterate)
for(let i=0;i<str1.length;i++)
{
    console.log(str1[i]);
    
}

// Print particular letter
console.log(str1[2]);
console.log(str1.charAt(4));

// Multiline String
str2="lorem\
hello\
dbf\
dfb\
"
console.log(str2);

// Searching
let sear="hel"
console.log(str2.search(sear));

// replace
let re="man"
let key="hello"
console.log(str2.replace(key,re));

// slice substring
let sli=str2.slice(-1);
console.log(sli);

let sub=str2.substring(10,0);
console.log(sub);

let subs=str2.substr(2,5);
console.log(subs);


// concatenation
let f_name='John';
l_name="P";
let fullname=f_name+l_name;
console.log(fullname);

// literal method
console.log(`My name is ${f_name} ${l_name}`);

// lower case and upper case
console.log(f_name.toLowerCase(),l_name.toUpperCase());
console.log(f_name.toUpperCase(),l_name.toUpperCase());






