let str= "   Hello Developer cat dog  " ;// 0 based indexing

console.log(str)
console.log(str, length) // length

console.log(str.charAt(9)); // char at given index

console.log(str.charCodeAt(9)); //ASCII code at given index



// SUBSTRING

console.log(str.substring(10)); // startINDX only will print until the end.

//start <end
console.log(str.substring (10,12));  // str[10], str[12]

//start > end
console.log(str.substring(12,10)); // str[10], str[11] // behave as str.substring(10,12)

//-ve index convertec to 0 by defalut
console.log(str.substring(-100)); // convert to str.substring (0)



//SLICE <--- ARRAy Function
let sl1= str.slice(10);
console.log(sl1); // starting on 10 idx print until the end

//start < end

let sl2 =str.slice(10,12);
console.log(sl2);  // str[10], str[12]

// start> end
let sl3 =str.slice(12,10);
console.log(sl3);  // empty string

//-ve index --> sliced from the end or get the string from the last index
let sl4 =str.slice(-10);
console.log(sl4);


console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim()); // it remove the blank space from starting and ending
// console.log()
