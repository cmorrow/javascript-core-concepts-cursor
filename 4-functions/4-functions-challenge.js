/**
 * VIDEO 4: Functions & Scope - Challenge Solution
 * 
 * CHALLENGE: Write a function greet(name, timeOfDay) that returns
 * "Good morning, Alex!" (or afternoon/evening based on timeOfDay)
 */

// ============================================
// SOLUTION
// ============================================

function greet(name, timeOfDay) {
    // Convert timeOfDay to lowercase to handle "Morning", "MORNING", etc.
    // Then build the greeting string
    return `Good ${timeOfDay.toLowerCase()}, ${name}!`;
}

console.log(greet('Alex', 'Morning'));
// Output: Good morning, Alex!

// ============================================
// ALTERNATIVE SOLUTIONS
// ============================================

// Solution 1: Using template literal with direct string
function greet1(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(greet1('Alex', 'morning'));

// Solution 2: Using string concatenation
function greet2(name, timeOfDay) {
    return 'Good ' + timeOfDay.toLowerCase() + ', ' + name + '!';
}
console.log(greet2('Alex', 'Morning'));

// Solution 3: Using arrow function
const greet3 = (name, timeOfDay) => {
    return `Good ${timeOfDay.toLowerCase()}, ${name}!`;
};
console.log(greet3('Alex', 'Morning'));

// Solution 4: One-line arrow function
const greet4 = (name, timeOfDay) => `Good ${timeOfDay.toLowerCase()}, ${name}!`;
console.log(greet4('Alex', 'Morning'));

// Solution 5: More robust version that handles different inputs
function greet5(name, timeOfDay) {
    // Normalize the time of day
    let normalizedTime = timeOfDay.toLowerCase();
    
    // Capitalize first letter for better formatting
    let capitalizedTime = normalizedTime.charAt(0).toUpperCase() + normalizedTime.slice(1);
    
    return `Good ${capitalizedTime}, ${name}!`;
}
console.log(greet5('Alex', 'MORNING'));  // Works with uppercase too

// ============================================
// ENHANCED VERSION - Auto-detect Time of Day
// ============================================

// Bonus: Function that automatically determines time of day
function greetAuto(name) {
    const hour = new Date().getHours();  // Get current hour (0-23)
    let timeOfDay;
    
    if (hour < 12) {
        timeOfDay = 'morning';
    } else if (hour < 17) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }
    
    return `Good ${timeOfDay}, ${name}!`;
}

console.log('\n=== Auto-detect version ===');
console.log(greetAuto('Alex'));  // Will show morning/afternoon/evening based on current time

// ============================================
// TESTING DIFFERENT INPUTS
// ============================================

console.log('\n=== Testing different inputs ===');
console.log(greet('Sarah', 'Morning'));
console.log(greet('John', 'Afternoon'));
console.log(greet('Emma', 'Evening'));
console.log(greet('Mike', 'MORNING'));  // Handles uppercase
console.log(greet('Lisa', 'morning'));  // Handles lowercase

