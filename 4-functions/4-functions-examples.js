/**
 * VIDEO 4: Functions & Scope - Additional Examples & Best Practices
 * 
 * This file contains extra examples and common mistakes to avoid.
 */

// ============================================
// COMMON HANGUP #1: var in Loops
// ============================================

// ❌ PROBLEM: Using var in loops creates a shared variable
console.log('=== var in loops problem ===');
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('var i =', i);  // All print 3! (not 0, 1, 2)
    }, 100);
}

// ✅ SOLUTION: Use let instead (creates a new variable each iteration)
console.log('\n=== let in loops (correct) ===');
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log('let j =', j);  // Prints 0, 1, 2 correctly
    }, 200);
}

// ============================================
// COMMON HANGUP #2: Arrow Function 'this'
// ============================================

// Arrow functions don't have their own 'this' - they inherit it from parent
// Regular functions have their own 'this'

const person = {
    name: 'Alex',
    
    // Regular function - has its own 'this'
    greetRegular: function() {
        console.log('Regular function:', this.name);
    },
    
    // Arrow function - uses parent's 'this' (which is window/global here)
    greetArrow: () => {
        console.log('Arrow function:', this.name);  // undefined (or window.name)
    },
    
    // Arrow function inside method - inherits 'this' from person
    greetArrowInMethod: function() {
        setTimeout(() => {
            console.log('Arrow in method:', this.name);  // Works! Uses person's this
        }, 100);
    }
};

person.greetRegular();  // "Alex"
person.greetArrow();    // undefined
person.greetArrowInMethod();  // "Alex"

// ============================================
// COMMON HANGUP #3: Forgetting return
// ============================================

// ❌ MISTAKE: Forgetting return statement
function addWrong(a, b) {
    a + b;  // Calculates but doesn't return
}
console.log('\n=== Forgetting return ===');
console.log('addWrong(2, 3):', addWrong(2, 3));  // undefined

// ✅ CORRECT: Always return the result
function addRight(a, b) {
    return a + b;  // Returns the result
}
console.log('addRight(2, 3):', addRight(2, 3));  // 5

// ============================================
// SCOPE EXAMPLES
// ============================================

console.log('\n=== Scope Examples ===');

// Global scope
let global = 'I am global';

function outerFunction() {
    // Outer function scope
    let outer = 'I am in outer function';
    
    function innerFunction() {
        // Inner function scope
        let inner = 'I am in inner function';
        
        // Can access all three scopes
        console.log('Inner can see:', global, outer, inner);
    }
    
    innerFunction();
    // console.log(inner);  // ❌ Error - can't see inner from outer
}

outerFunction();

// ============================================
// CLOSURES - Functions Remember Their Environment
// ============================================

// A closure is when a function "remembers" variables from its outer scope
// even after the outer function has finished

function createCounter() {
    let count = 0;  // This variable is "closed over" by the inner function
    
    return function() {
        count++;  // Can still access count even though createCounter finished
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('\n=== Closures Example ===');
console.log('Counter 1:', counter1());  // 1
console.log('Counter 1:', counter1());  // 2
console.log('Counter 2:', counter2());  // 1 (separate counter!)
console.log('Counter 1:', counter1());  // 3

// Each counter has its own separate count variable

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Calculator Functions
console.log('\n=== Calculator Functions ===');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
}

console.log('10 + 5 =', add(10, 5));
console.log('10 - 5 =', subtract(10, 5));
console.log('10 * 5 =', multiply(10, 5));
console.log('10 / 5 =', divide(10, 5));
console.log('10 / 0 =', divide(10, 0));

// Example 2: String Manipulation Functions
console.log('\n=== String Functions ===');

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

console.log('capitalize("hello"):', capitalize('hello'));
console.log('reverseString("hello"):', reverseString('hello'));
console.log('countWords("Hello world"):', countWords('Hello world'));

// Example 3: Array Helper Functions
console.log('\n=== Array Helper Functions ===');

function findMax(numbers) {
    if (numbers.length === 0) return null;
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) max = num;
    }
    return max;
}

function findMin(numbers) {
    if (numbers.length === 0) return null;
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) min = num;
    }
    return min;
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

let scores = [85, 92, 78, 96, 88];
console.log('Scores:', scores);
console.log('Max:', findMax(scores));
console.log('Min:', findMin(scores));
console.log('Average:', calculateAverage(scores));

// Example 4: Validation Functions
console.log('\n=== Validation Functions ===');

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function isValidAge(age) {
    return typeof age === 'number' && age > 0 && age < 150;
}

function isValidPassword(password) {
    return password && password.length >= 8;
}

console.log('isValidEmail("test@example.com"):', isValidEmail('test@example.com'));
console.log('isValidEmail("notanemail"):', isValidEmail('notanemail'));
console.log('isValidAge(25):', isValidAge(25));
console.log('isValidAge(200):', isValidAge(200));
console.log('isValidPassword("short"):', isValidPassword('short'));
console.log('isValidPassword("longenough"):', isValidPassword('longenough'));

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use descriptive function names
function calculateTotalPrice(items) { }  // Good
// ❌ DON'T: function calc() { }  // Bad - too vague

// ✅ DO: Keep functions small and focused (single responsibility)
function validateEmail(email) { }  // Does one thing
function sendEmail(email) { }     // Does another thing
// ❌ DON'T: function validateAndSendEmail() { }  // Does too much

// ✅ DO: Use arrow functions for short, simple functions
const double = x => x * 2;
const add = (a, b) => a + b;

// ✅ DO: Use regular functions for methods that need 'this'
const obj = {
    name: 'Alex',
    greet: function() {
        return `Hello, ${this.name}`;
    }
};

// ✅ DO: Return early to avoid deep nesting
function processUser(user) {
    if (!user) return null;
    if (!user.email) return null;
    if (!user.name) return null;
    
    // Main logic here
    return 'Processed';
}

// ✅ DO: Use default parameters
function greet(name, greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// ✅ DO: Document complex functions
/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateArea(width, height) {
    return width * height;
}

