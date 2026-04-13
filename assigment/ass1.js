let searchQuery = " Learn JavaScript Functions Arrow IIFE ";


//trim
let cleanedQuery = searchQuery.trim();
console.log("Cleaned String:", cleanedQuery);
console.log("Length:", cleanedQuery.length);

// changiing the cases
console.log("Lowercase:", cleanedQuery.toLowerCase());
console.log("Uppercase:", cleanedQuery.toUpperCase());

//slicing
let jsStart = cleanedQuery.indexOf("JavaScript");
let jsWord = cleanedQuery.substring(jsStart,jsStart+10)
console.log(jsWord);

//check contain function,arrow, iife
let lowerQuery = cleanedQuery.toLowerCase();
console.log( lowerQuery.includes("functions"));
console.log( lowerQuery.includes("arrow"));
console.log( lowerQuery.includes("iife"));

//charater and ASCII value
let a = cleanedQuery.charAt(6);
let value = cleanedQuery.charCodeAt(0);
console.log(a);
console.log(value);

