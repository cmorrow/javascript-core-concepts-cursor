/**
 * VIDEO 1: Variables & Data Types - Demo Code
 * 
 * This file demonstrates how to create and use variables in JavaScript.
 * Think of variables as labeled boxes where you store information.
 */

// ============================================
// VARIABLE DECLARATION TYPES
// ============================================

// 1. let - Use this when you might change the value later
// "let" means "allow this to change"
let name = 'Alex';
console.log('Name:', name);

// You can change a let variable
name = 'Alexandra';
console.log('Updated name:', name);

// 2. const - Use this when the value should never change
// "const" means "constant" or "fixed"
const age = 25;
console.log('Age:', age);

// Try to change a const variable - this will cause an error!
// age = 26; // ❌ This will throw: TypeError: Assignment to constant variable.

// 3. var - Old way of declaring variables (avoid in modern code)
// "var" is from older JavaScript - it has some confusing behavior
var isLearning = true;
console.log('Is learning:', isLearning);

// ============================================
// DATA TYPES (What goes inside the boxes)
// ============================================

// STRING - Text wrapped in quotes
// Think of strings as words or sentences
let firstName = 'Alex';
let lastName = "Smith";  // Single or double quotes both work
let greeting = `Hello, ${firstName}!`;  // Template literals (backticks) let you insert variables
console.log('String examples:', firstName, lastName, greeting);

// NUMBER - Numbers without quotes
// Think of numbers as... well, numbers!
let score = 90;
let temperature = 98.6;  // Decimals are fine
let negativeNumber = -5;
console.log('Number examples:', score, temperature, negativeNumber);

// BOOLEAN - True or false only
// Think of booleans as yes/no switches
let isLoggedIn = true;
let hasPermission = false;
console.log('Boolean examples:', isLoggedIn, hasPermission);

// NULL - Intentionally empty
// Think of null as an empty box that you deliberately left empty
let userAvatar = null;
console.log('Null example:', userAvatar);

// UNDEFINED - Not set yet
// Think of undefined as a box that was never filled
let userEmail;
console.log('Undefined example:', userEmail);

// ============================================
// TYPE COERCION DEMO (The "1 + '1' = '11'" Problem)
// ============================================

// JavaScript tries to be helpful by converting types automatically
// This is called "type coercion" - but it can be confusing!

let number1 = 1;
let string1 = '1';

// When you use + with a string, JavaScript converts everything to strings
console.log('1 + "1" =', number1 + string1);  // Result: "11" (not 2!)

// But with - (subtraction), JavaScript converts strings to numbers
console.log('"5" - 2 =', "5" - 2);  // Result: 3 (works as expected)

// To fix this, convert types explicitly:
console.log('Number("1") + 1 =', Number(string1) + 1);  // Result: 2
console.log('String(1) + "1" =', String(number1) + string1);  // Result: "11" (intentional)

// ============================================
// TEMPLATE LITERALS (Better String Building)
// ============================================

// Instead of: name + " is " + age + " years old"
// Use template literals with ${} to insert variables
let personName = 'Alex';
let personAge = 25;
let personScore = 90;

let message = `${personName} is ${personAge} → ${personScore + ' points'}`;
console.log('Template literal:', message);

// ============================================
// CHECKING DATA TYPES
// ============================================

// Use typeof to see what type something is
console.log('Type of "hello":', typeof "hello");  // "string"
console.log('Type of 42:', typeof 42);  // "number"
console.log('Type of true:', typeof true);  // "boolean"
console.log('Type of null:', typeof null);  // "object" (this is a JavaScript quirk!)
console.log('Type of undefined:', typeof undefined);  // "undefined"

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use const by default, let when you need to change it
const maxUsers = 100;  // This won't change
let currentUsers = 0;  // This will change

// ✅ DO: Use descriptive variable names
const userFirstName = 'Alex';  // Good - clear what it is
// ❌ DON'T: const x = 'Alex';  // Bad - what is x?

// ✅ DO: Use camelCase for variable names (first word lowercase, rest capitalized)
let firstName = 'Alex';
let isUserLoggedIn = true;

// ✅ DO: Initialize variables when you declare them
let count = 0;  // Good
// ❌ DON'T: let count; count = 0;  // Less clear

