/**
 * VIDEO 2: Comparison Operators - Demo Code
 * 
 * Comparison operators let you compare values and get true or false answers.
 * Think of them as asking questions: "Is this equal to that?" "Is this greater than that?"
 */

// ============================================
// EQUALITY COMPARISONS
// ============================================

// == (loose equality) - converts types before comparing
// === (strict equality) - compares both value AND type

let num1 = 5;
let str1 = "5";

console.log('=== Equality Comparisons ===');
console.log('5 == "5":', num1 == str1);   // true (converts types, then compares)
console.log('5 === "5":', num1 === str1); // false (different types, so not equal)

// More examples of loose vs strict equality
console.log('\n=== More Equality Examples ===');
console.log('0 == false:', 0 == false);  // true - both are falsy!
console.log('0 === false:', 0 === false); // false - different types
console.log('"" == false:', "" == false); // true - empty string is falsy
console.log('"" === false:', "" === false); // false - different types
console.log('null == undefined:', null == undefined); // true (special case)
console.log('null === undefined:', null === undefined); // false (different types)

// ============================================
// INEQUALITY COMPARISONS
// ============================================

console.log('\n=== Inequality Comparisons ===');
console.log('5 != "5":', num1 != str1);   // false (loose - converts types)
console.log('5 !== "5":', num1 !== str1); // true (strict - different types)

// ============================================
// GREATER THAN / LESS THAN
// ============================================

let age1 = 25;
let age2 = 30;

console.log('\n=== Greater Than / Less Than ===');
console.log('25 > 30:', age1 > age2);   // false
console.log('25 < 30:', age1 < age2);   // true
console.log('25 >= 25:', age1 >= 25);   // true (greater than or equal)
console.log('25 <= 30:', age1 <= age2); // true (less than or equal)

// ============================================
// COMPARING STRINGS (alphabetical order)
// ============================================

console.log('\n=== String Comparisons ===');
console.log('"apple" < "banana":', "apple" < "banana"); // true (a comes before b)
console.log('"zebra" > "apple":', "zebra" > "apple");   // true (z comes after a)
console.log('"A" < "a":', "A" < "a");    // true (uppercase comes before lowercase in ASCII)
console.log('"apple" < "Banana":', "apple" < "Banana"); // false! "B" comes before "a" in ASCII

// To compare strings ignoring case:
console.log('\n=== Case-Insensitive Comparison ===');
console.log('"apple".toLowerCase() < "Banana".toLowerCase():', 
    "apple".toLowerCase() < "Banana".toLowerCase()); // true

// ============================================
// COMPARING NUMBERS
// ============================================

console.log('\n=== Number Comparisons ===');
let price1 = 19.99;
let price2 = 20.00;
let price3 = 19.99;

console.log('19.99 > 20.00:', price1 > price2);   // false
console.log('19.99 < 20.00:', price1 < price2);   // true
console.log('19.99 === 19.99:', price1 === price3); // true (same value and type)
console.log('19.99 >= 19.99:', price1 >= price3);   // true

// ============================================
// COMPARING BOOLEANS
// ============================================

console.log('\n=== Boolean Comparisons ===');
let isActive = true;
let isEnabled = false;

console.log('true === true:', isActive === true);     // true
console.log('true === false:', isActive === isEnabled); // false
console.log('true == 1:', true == 1);   // true (loose equality converts)
console.log('true === 1:', true === 1); // false (strict - different types)

