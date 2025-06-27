let a=10;
let b=20;

// Addition 
console.log(a+b);

// Sub
console.log(a-b)

// Mul
console.log(a*b);

// div
console.log(a/b);

// Modulus
console.log(a%b);

// Increment
console.log(a++);

// Decrement
console.log(b--);

// Assign =
let c=a;

console.log(c);

// +=
console.log(b+=3);

// -=
console.log(a-=4);

// *=
console.log(b*=10);

// /=
console.log(c/=1);

// %=
console.log(b%=2);

// Comparison  ==
console.log(a==b);
console.log(a==c);

// ===
console.log(a===b);
console.log(a===c);

// <
console.log(a<b)

// >
console.log(b>a);

// Logical &&
console.log(a==c && a<b);

// !
console.log(!(b<a));



// Object
let Student={
    name: "John",
    age: 20,
    Qualification: "Diploma"
}

console.log(Student);
console.log(Student.name, Student.dob="10/10/2005")
console.log(Student.Gender= "Male")
console.log(Student);

// condition if else else if
let n=0;
if(n%2==0){
    console.log("Even Number");
}
else if (n%2!=0){
    console.log("Odd Number");
}

// Switch case
op=2
console.log("1.Add\n2.Sub")
switch(op){
    case 1:
        let m=40,n=20;
        console.log(m+n);
        break
    case 2:
        let h=40,g=20;
        console.log(h-g);
        break
    default:
        console.log("Not");
        break


}

// for loop
for(var i=1;i<=10;i++)
{
    console.log(i);
}

// while loop
var i=0
while(i<=7){
    console.log(i);
    i++;
}

// do-while
do{
    console.log(i);
    i++;
}while(i<=9)

for(var i=5;i>0;i--)
{
    console.log("*".repeat(i))
}

