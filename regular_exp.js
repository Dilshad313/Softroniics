const str1 = " today was a good day"
const str2 = "Rama killed Ravana"
const str3 = "ravana killed by rama"
const str4 = `Hello
good food
good health
heiii`

const regexp1=/a/;
const result1 = regexp1.test(str1);
console.log("result 1:",result1);

const regexp2=/A/i;
console.log("result 2:",regexp2.test(str1));

const regexp3=/ab/;
console.log("result 3:",regexp3.test(str1));

const regexp4=/[tov]a/;
console.log("result 4:",regexp4.test(str1));

const regexp5=/[a-z]a/i;
console.log("result 5:",regexp5.test(str1));

const regexp6=/[a-z0-9]a/i;
console.log("result 6:",regexp6.test(str1));

const regexp7=/^Today/i;
console.log("result 7:",regexp7.test(str1));

const regexp8=/day$/i;
console.log("result 8:",regexp8.test(str1));

const regexp9=/^good/im;
console.log("result 9:",regexp9.test(str4));

const regexp10=/good$/im;
console.log("result 10:",regexp10.test(str4));

const regexp11=/ravana?/im;
console.log("result 11:",regexp11.test(str2));

const regexp12=/fish(es)?/im;
console.log("result 12:",regexp12.test(str4));

const regexp13=/fishes+$/i;
console.log("result 13:",regexp13.test(str3));

const regexp14=/ramaa*/i;
console.log("result 14:",regexp14.test(str3));

const regexp15=/rama.*$/i;
console.log("result 15:",regexp15.test(str3));

const regexp16=/rama.*$/i;
console.log("result 16:",regexp16.test(str3));

const regexp17=/[ghe]/i;
console.log("result 17:",regexp17.test(str4));

const regexp18=/[kjm]/i;
const result18 = regexp18.test(str4);
console.log("result 18:",result18);

const regexp19=/[^kjm]/i;
const result19 = regexp19.test(str4);
console.log("result 19:",result19);

const regexp20=/[H+]/i;
const result20 = regexp20.test(str4);
console.log("result 20:",result20);

const regexp21=/[O$]/i;
const result21 = regexp21.test(str4);
console.log("result 21:",result21);

const regexp22=/[O?$]/i;
const result22 = regexp22.test(str4);
console.log("result 22:",result22);

const regexp23=/[O+$]/i;
const result23 = regexp23.test(str4);
console.log("result 23:",result23);



const regexp24=/L{2}o$/i;
const result24 = regexp24.test(str4);
console.log("result 24:",result24);

const regexp25=/L{2,4}o$/i;
const result25 = regexp25.test(str4);
console.log("result 25:",result25);

const regexp26=/HeL{2,4}o$/i;
const result26 = regexp26.test(str4);
console.log("result 26:",result26);

const regexp27=/\d/i;
const result27 = regexp27.test(str4);
console.log("result 27:",result27);

const regexp28=/\D/i;
const result28 = regexp28.test(str4);
console.log("result 28:",result28);

const regexp29=/./i;
const result29 = regexp29.test(str4);
console.log("result 29:",result29);

const regexp30=/\./i;
const result30 = regexp30.test(str4);
console.log("result 30:",result30);