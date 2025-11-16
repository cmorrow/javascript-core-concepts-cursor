/**
 * VIDEO 1: Variables & Data Types - Additional Examples & Best Practices
 * 
 * This file contains extra examples to help you understand variables better.
 */

// ============================================
// HOISTING DEMONSTRATION (Common Hangup #1)
// ============================================

// Hoisting is when JavaScript "moves" variable declarations to the top
// This only happens with "var", not with "let" or "const"

// ❌ CONFUSING BEHAVIOR WITH var:
console.log('x before declaration:', x);  // Outputs: undefined (not an error!)
var x = 5;
console.log('x after declaration:', x);  // Outputs: 5

// What's happening? JavaScript treats the above code like this:
// var x;  // Declaration moved to top (but value is undefined)
// console.log(x);  // undefined
// x = 5;  // Assignment happens here
// console.log(x);  // 5

// ✅ BETTER BEHAVIOR WITH let/const:
// console.log('y before declaration:', y);  // ❌ Error: Cannot access 'y' before initialization
// let y = 5;
// console.log('y after declaration:', y);

// This is why we prefer let/const - they prevent confusing bugs!

// ============================================
// TYPE COERCION EXAMPLES (Common Hangup #2)
// ============================================

// JavaScript automatically converts types in certain situations
// This is called "type coercion" and can be surprising

console.log('\n=== Type Coercion Examples ===');

// Addition with strings converts everything to strings
console.log('5 + "3" =', 5 + "3");        // "53" (string)
console.log('"5" + 3 =', "5" + 3);        // "53" (string)
console.log('"Hello" + 42 =', "Hello" + 42);  // "Hello42" (string)

// Subtraction converts strings to numbers
console.log('"5" - 3 =', "5" - 3);        // 2 (number)
console.log('"10" - "5" =', "10" - "5");  // 5 (number)

// Multiplication and division also convert to numbers
console.log('"5" * 2 =', "5" * 2);        // 10 (number)
console.log('"10" / 2 =', "10" / 2);      // 5 (number)

// ============================================
// TYPE CONVERSION (How to Control It)
// ============================================

console.log('\n=== Type Conversion (Explicit) ===');

// Convert string to number
let stringNumber = "42";
let actualNumber = Number(stringNumber);
console.log('Number("42") =', actualNumber, typeof actualNumber);

// Convert number to string
let number = 42;
let string = String(number);
console.log('String(42) =', string, typeof string);

// Parse integers (stops at first non-number)
console.log('parseInt("42px") =', parseInt("42px"));  // 42
console.log('parseInt("px42") =', parseInt("px42"));  // NaN (Not a Number)

// Parse floats (decimals)
console.log('parseFloat("3.14") =', parseFloat("3.14"));  // 3.14

// ============================================
// TRUTHY AND FALSY VALUES
// ============================================

// In JavaScript, some values are "falsy" (treated as false)
// Everything else is "truthy" (treated as true)

console.log('\n=== Falsy Values ===');
console.log('Boolean(0) =', Boolean(0));           // false
console.log('Boolean("") =', Boolean(""));         // false (empty string)
console.log('Boolean(null) =', Boolean(null));     // false
console.log('Boolean(undefined) =', Boolean(undefined));  // false
console.log('Boolean(NaN) =', Boolean(NaN));       // false
console.log('Boolean(false) =', Boolean(false));   // false

console.log('\n=== Truthy Values ===');
console.log('Boolean(1) =', Boolean(1));             // true (any non-zero number)
console.log('Boolean("hello") =', Boolean("hello")); // true (any non-empty string)
console.log('Boolean([]) =', Boolean([]));          // true (empty array is truthy!)
console.log('Boolean({}) =', Boolean({}));          // true (empty object is truthy!)

// ============================================
// CONSTANT OBJECTS AND ARRAYS
// ============================================

// const prevents reassignment, but doesn't prevent changing the contents

const myArray = [1, 2, 3];
// myArray = [4, 5, 6];  // ❌ Error: Cannot reassign
myArray.push(4);  // ✅ OK: Can modify the array
console.log('Modified array:', myArray);  // [1, 2, 3, 4]

const myObject = { name: 'Alex' };
// myObject = { name: 'Bob' };  // ❌ Error: Cannot reassign
myObject.name = 'Bob';  // ✅ OK: Can modify the object
console.log('Modified object:', myObject);  // { name: 'Bob' }

// ============================================
// VARIABLE NAMING BEST PRACTICES
// ============================================

// ✅ GOOD NAMES (descriptive and clear)
const userName = 'Alex';
const maxRetryAttempts = 3;
const isUserAuthenticated = true;
const currentYear = 2024;

// ❌ BAD NAMES (unclear or confusing)
// const u = 'Alex';  // What is 'u'?
// const x1 = 3;      // What does x1 mean?
// const temp = true; // Temporary? Temperature? Template?

// ✅ Use camelCase for variables
let firstName = 'John';
let lastName = 'Doe';
let isActive = true;

// ✅ Use UPPER_SNAKE_CASE for constants that never change
const MAX_USERS = 100;
const API_BASE_URL = 'https://api.example.com';
const PI = 3.14159;

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: User Profile
const profile = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  age: 29,
  email: 'sarah@example.com',
  isVerified: true,
  joinDate: null  // Will be set later
};

console.log('\n=== User Profile ===');
console.log(`Name: ${profile.firstName} ${profile.lastName}`);
console.log(`Age: ${profile.age}`);
console.log(`Verified: ${profile.isVerified}`);

// Example 2: Shopping Cart
let itemCount = 0;
const maxItems = 50;
let totalPrice = 0.00;
const taxRate = 0.08;  // 8% tax
let isCheckoutEnabled = false;

console.log('\n=== Shopping Cart ===');
console.log(`Items: ${itemCount}/${maxItems}`);
console.log(`Total: $${totalPrice.toFixed(2)}`);
console.log(`Checkout enabled: ${isCheckoutEnabled}`);

// Example 3: Game Score
let playerScore = 0;
let highScore = 0;
let livesRemaining = 3;
let isGameOver = false;
let currentLevel = 1;

console.log('\n=== Game State ===');
console.log(`Score: ${playerScore}`);
console.log(`High Score: ${highScore}`);
console.log(`Lives: ${livesRemaining}`);
console.log(`Level: ${currentLevel}`);
console.log(`Game Over: ${isGameOver}`);

