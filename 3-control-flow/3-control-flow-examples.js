/**
 * VIDEO 3: Control Flow - Additional Examples & Best Practices
 * 
 * This file contains extra examples and common mistakes to avoid.
 */

// ============================================
// COMMON HANGUP #1: Off-by-One Errors
// ============================================

// ❌ MISTAKE: Using <= with array.length (causes crash)
let fruits = ['apple', 'banana', 'orange'];
// for (let i = 0; i <= fruits.length; i++) {  // ❌ Crashes! Last index is 2, not 3
//     console.log(fruits[i]);
// }

// ✅ CORRECT: Use < (less than) not <= (less than or equal)
console.log('=== Correct Array Looping ===');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Arrays are zero-indexed (start at 0, not 1)
// Index 0 = first item, Index 1 = second item, etc.
// Length = 3, but last index = 2 (0, 1, 2)

// ============================================
// COMMON HANGUP #2: Infinite Loops
// ============================================

// ❌ MISTAKE: Forgetting to increment the counter
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     // Forgot i++ - this will run forever!
// }

// ✅ CORRECT: Always increment (or change) the condition
console.log('\n=== Correct While Loop ===');
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // Don't forget this!
}

// ============================================
// COMMON HANGUP #3: Truthy/Falsy Confusion
// ============================================

console.log('\n=== Truthy/Falsy in Conditionals ===');

// Empty string is falsy
if ('') {
    console.log('This won\'t print');
} else {
    console.log('Empty string is falsy');
}

// Zero is falsy
if (0) {
    console.log('This won\'t print');
} else {
    console.log('Zero is falsy');
}

// null and undefined are falsy
if (null) {
    console.log('This won\'t print');
} else {
    console.log('null is falsy');
}

// But empty array is truthy! (This surprises many people)
if ([]) {
    console.log('Empty array is truthy!');
}

// To check if array has items, check length
let myArray = [];
if (myArray.length > 0) {
    console.log('Array has items');
} else {
    console.log('Array is empty');
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Grade Calculator
console.log('\n=== Example 1: Grade Calculator ===');
function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

let scores = [95, 87, 72, 65, 45];
scores.forEach(score => {
    console.log(`Score ${score}: Grade ${getGrade(score)}`);
});

// Example 2: Countdown Timer
console.log('\n=== Example 2: Countdown ===');
for (let seconds = 5; seconds > 0; seconds--) {
    console.log(`${seconds}...`);
}
console.log('Blast off!');

// Example 3: Finding Items in Array
console.log('\n=== Example 3: Finding Items ===');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        found = true;
        console.log(`Found 7 at index ${i}`);
        break;  // Stop searching once found
    }
}

if (!found) {
    console.log('7 not found');
}

// Example 4: Multiplication Table
console.log('\n=== Example 4: Multiplication Table ===');
for (let row = 1; row <= 5; row++) {
    let line = '';
    for (let col = 1; col <= 5; col++) {
        let product = row * col;
        line += `${product.toString().padStart(3)} `;  // padStart adds spaces for alignment
    }
    console.log(line);
}

// Example 5: Password Validation
console.log('\n=== Example 5: Password Validation ===');
function validatePassword(password) {
    if (!password) {  // Check if password exists
        return 'Password is required';
    }
    
    if (password.length < 8) {
        return 'Password must be at least 8 characters';
    }
    
    let hasNumber = false;
    let hasLetter = false;
    
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLetter = true;
        }
    }
    
    if (!hasNumber) {
        return 'Password must contain a number';
    }
    
    if (!hasLetter) {
        return 'Password must contain a letter';
    }
    
    return 'Password is valid!';
}

console.log(validatePassword(''));
console.log(validatePassword('short'));
console.log(validatePassword('onlyletters'));
console.log(validatePassword('12345678'));
console.log(validatePassword('GoodPass123'));

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use descriptive variable names in loops
for (let index = 0; index < users.length; index++) {
    // Better than: for (let i = 0; i < u.length; i++)
}

// ✅ DO: Use for...of for arrays (simpler than traditional for loop)
let items = ['a', 'b', 'c'];
for (let item of items) {
    console.log(item);  // No need to track index!
}

// ✅ DO: Use for...in for object properties
let person = { name: 'Alex', age: 25 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// ✅ DO: Use early returns in functions to avoid deep nesting
function processUser(user) {
    if (!user) return 'No user provided';
    if (!user.name) return 'User has no name';
    if (!user.email) return 'User has no email';
    
    // Main logic here (no deep nesting!)
    return 'User processed';
}

// ✅ DO: Use switch for multiple exact matches
function getDayType(day) {
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            return 'Weekday';
        case 'Saturday':
        case 'Sunday':
            return 'Weekend';
        default:
            return 'Unknown';
    }
}

// ❌ DON'T: Use == (loose equality), use === (strict equality)
// if (score == 100) { }  // ❌ Bad - allows type coercion
// if (score === 100) { }  // ✅ Good - checks type and value

// ❌ DON'T: Create infinite loops
// while (true) { }  // ❌ Unless you have a break condition!

// ❌ DON'T: Modify array length while looping
let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     arr.pop();  // ❌ Bad - changes length while looping
// }

