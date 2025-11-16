/**
 * VIDEO 4: Functions & Scope - Demo Code
 * 
 * Functions are reusable blocks of code - like recipes you can use over and over.
 * Scope determines who can "see" your variables - like rooms in a house.
 */

// ============================================
// FUNCTION DECLARATION - The Classic Way
// ============================================

// Function declarations are "hoisted" - you can call them before they're defined
// Think of it as JavaScript moving function declarations to the top

function calcTip(bill, pct) {
    // bill and pct are "parameters" - placeholders for values we'll pass in
    // The function calculates the tip amount
    return (bill * pct / 100).toFixed(2);  // toFixed(2) rounds to 2 decimal places
}

// "Calling" or "invoking" the function with "arguments" (actual values)
let tip = calcTip(50, 15);
console.log('Tip amount:', tip);

// ============================================
// ARROW FUNCTIONS - The Modern Way
// ============================================

// Arrow functions are shorter and more modern
// Think of => as "goes to" or "becomes"

// Simple arrow function (one parameter, one expression)
const double = x => x * 2;
console.log('Double of 7:', double(7));

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log('Add 5 and 3:', add(5, 3));

// Arrow function with multiple lines (needs curly braces and return)
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log('Multiply 4 and 6:', multiply(4, 6));

// ============================================
// FUNCTION EXPRESSIONS - Functions as Values
// ============================================

// You can store functions in variables
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet('Alex'));

// This is similar to arrow functions, but uses the "function" keyword

// ============================================
// RETURN vs SIDE EFFECTS
// ============================================

// Functions can RETURN a value (give something back)
function getFullName(first, last) {
    return `${first} ${last}`;  // Returns a value
}
let name = getFullName('John', 'Doe');
console.log('Full name:', name);

// Functions can have SIDE EFFECTS (do something without returning)
function logMessage(msg) {
    console.log(msg);  // Does something (logs to console)
    // No return statement - returns undefined
}
logMessage('This is a side effect');

// Functions can do BOTH
function processAndReturn(value) {
    console.log('Processing:', value);  // Side effect
    return value * 2;  // Return value
}
let result = processAndReturn(5);
console.log('Result:', result);

// ============================================
// SCOPE - Who Can See What
// ============================================

// GLOBAL SCOPE - Variables declared outside functions
// Think of global scope as the "outside" - everyone can see it
let globalVar = 'I am global';

function showScope() {
    // LOCAL SCOPE - Variables declared inside functions
    // Think of local scope as a "room" - only code inside can see it
    let localVar = 'I am local';
    console.log('Inside function:', globalVar);  // Can see global
    console.log('Inside function:', localVar);   // Can see local
}

showScope();
// console.log(localVar);  // ❌ Error! Can't see localVar outside the function

// ============================================
// PARAMETERS AND ARGUMENTS
// ============================================

// Parameters are the "placeholders" in the function definition
function introduce(name, age, city) {  // name, age, city are parameters
    return `Hi, I'm ${name}, ${age} years old, from ${city}`;
}

// Arguments are the actual values you pass when calling the function
let intro = introduce('Sarah', 28, 'New York');  // 'Sarah', 28, 'New York' are arguments
console.log(intro);

// ============================================
// DEFAULT PARAMETERS
// ============================================

// You can give parameters default values
function greetUser(name, greeting = 'Hello') {  // greeting defaults to 'Hello'
    return `${greeting}, ${name}!`;
}

console.log(greetUser('Alex'));  // Uses default 'Hello'
console.log(greetUser('Alex', 'Hi'));  // Uses provided 'Hi'

// ============================================
// RETURN STATEMENT
// ============================================

// If you don't return anything, the function returns undefined
function noReturn() {
    console.log('I do something but return nothing');
}
let nothing = noReturn();
console.log('Return value:', nothing);  // undefined

// Always return something if you need the result
function withReturn() {
    return 'I return this value';
}
let something = withReturn();
console.log('Return value:', something);  // 'I return this value'

