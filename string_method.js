//there are many string method in javascript
//string length
const str = "HELLO ALIAN";
let strlen = str.length();
console.log(strlen);

//string charAt
const str1 = "HELLO ALIAN";
let strcharAt = str1.charAt(1)//1 is index of str1 
HTMLFormControlsCollection.log(strcharAt);

//string chaCodeAt
const str2 = "HELLO ALIAN";
let strCharCodeAt = str2.charCodeAt(2)//2 is index of str2 
 
//srting slice
const str3 = "HELLOOO AALIAN";
let strSlice = str3.slice(8,13);
let strSlice1 = str3.slice(8);
console.log(strSlice);
console.log(strSlice1);

//string substring
const str4 = "HELLO ALIAN";
let strSubString = str4.substring(7);
let strSubString1 = str4.substring(7,13);
console.log(strSubString);
console.log(strSubString1);

//string to uppercase
const str5 = "hello alian";
let strToUpper = str5.toUpperCase();
console.log(strToUpper);

//string to lowercase
const str6 = "HELLO ALIAN";
let strTolower = str6.toLowerCase();
console.log(strTolower);
//string concat
const str7 = "hello ";
const str8 = "alian"
let strconcat = str7.concat("" + str8)//first method
let strconcat1 = str7 + "" + str8;//second method
console.log(strconcat);
console.log(strconcat);

//string trim
const str9 = "asasw hello";
let strtrim = str.trim(5);//5 is index
console.log(strtrim);
