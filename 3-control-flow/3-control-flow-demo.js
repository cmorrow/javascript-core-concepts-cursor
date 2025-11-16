/**
 * VIDEO 3: Control Flow - Conditionals & Loops - Demo Code
 * 
 * Control flow lets your code make decisions and repeat actions.
 * Think of conditionals as crossroads - your code chooses which path to take.
 * Think of loops as repeating a task until it's done.
 */

// ============================================
// CONDITIONALS - Making Decisions
// ============================================

// IF STATEMENT - The most basic decision maker
// "If this is true, do that"
let score = 85;

if (score > 90) {
    console.log('You got an A+!');
} else if (score > 80) {
    console.log('You got a B!');
} else {
    console.log('Keep trying!');
}

// TERNARY OPERATOR - A shorter way to write simple if/else
// Think of it as: condition ? doThisIfTrue : doThisIfFalse
let grade = score > 90 ? 'A+' : score > 80 ? 'B' : 'Keep trying';
console.log('Grade:', grade);

// ============================================
// LOOPS - Repeating Actions
// ============================================

// FOR LOOP - Repeat a specific number of times
// Structure: for (start; condition; step) { do this }
// "Start at 1, keep going while i is less than or equal to 10, add 1 each time"
let evens = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  // % is "modulo" - gives the remainder after division
        evens.push(i);   // push adds an item to an array
    }
}
console.log('Even numbers 1-10:', evens);

// WHILE LOOP - Repeat while a condition is true
// "Keep doing this as long as the condition is true"
let count = 0;
while (count < 5) {
    console.log('Count:', count);
    count++;  // Add 1 to count (same as count = count + 1)
}

// DO...WHILE LOOP - Do once, then repeat if condition is true
// "Do this at least once, then keep doing it if the condition is true"
let attempts = 0;
do {
    attempts++;
    console.log('Attempt:', attempts);
} while (attempts < 3);

// ============================================
// SWITCH STATEMENT - Multiple Choices
// ============================================

// Switch is like a multiple-choice question
let dayOfWeek = 'Monday';

switch (dayOfWeek) {
    case 'Monday':
        console.log('Start of the work week');
        break;  // Stop here, don't check other cases
    case 'Friday':
        console.log('TGIF!');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:  // If none of the cases match
        console.log('Regular day');
}

// ============================================
// LOOP CONTROL - break and continue
// ============================================

// BREAK - Stop the loop immediately
console.log('\n=== Break Example ===');
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Stop the loop when i equals 5
    }
    console.log(i);  // Will only print 1, 2, 3, 4
}

// CONTINUE - Skip to the next iteration
console.log('\n=== Continue Example ===');
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers, go to next iteration
    }
    console.log(i);  // Will only print odd numbers: 1, 3, 5, 7, 9
}

// ============================================
// NESTED LOOPS - Loops Inside Loops
// ============================================

// You can put loops inside other loops
console.log('\n=== Nested Loop Example ===');
for (let row = 1; row <= 3; row++) {
    let line = '';
    for (let col = 1; col <= 3; col++) {
        line += `(${row},${col}) `;
    }
    console.log(line);
}

// ============================================
// TRUTHY AND FALSY IN CONDITIONALS
// ============================================

// JavaScript treats certain values as "falsy" (false) in conditionals
// Everything else is "truthy" (true)

let name = 'Alex';
if (name) {  // This is truthy (non-empty string)
    console.log('Name exists');
}

let emptyString = '';
if (emptyString) {  // This is falsy (empty string)
    console.log('This won\'t print');
} else {
    console.log('Empty string is falsy');
}

// Common falsy values: false, 0, '', null, undefined, NaN
// Everything else is truthy!

