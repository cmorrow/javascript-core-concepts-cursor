/**
 * VIDEO 1: Variables & Data Types - Challenge Solution
 * 
 * CHALLENGE: Create a user with name (string), age (number), and isLoggedIn (boolean).
 * Log: "[name] is [age] and logged in: [bool]"
 */

// ============================================
// SOLUTION
// ============================================

// Create a user object with the required properties
// An object is like a container that holds multiple pieces of information
const user = {
  name: 'Jordan',        // string - the user's name
  age: 28,                // number - the user's age
  isLoggedIn: true        // boolean - whether the user is logged in
};

// Log the message using template literals
// Template literals (backticks) let us easily insert variables into strings
console.log(`${user.name} is ${user.age} and logged in: ${user.isLoggedIn}`);
// Output: Jordan is 28 and logged in: true

// ============================================
// ALTERNATIVE SOLUTIONS
// ============================================

// Solution 1: Using separate variables (simpler, but less organized)
const userName = 'Jordan';
const userAge = 28;
const userIsLoggedIn = true;
console.log(`${userName} is ${userAge} and logged in: ${userIsLoggedIn}`);

// Solution 2: Using string concatenation (older style, but still works)
const name2 = 'Jordan';
const age2 = 28;
const isLoggedIn2 = true;
console.log(name2 + ' is ' + age2 + ' and logged in: ' + isLoggedIn2);

// Solution 3: Building the message step by step
const name3 = 'Jordan';
const age3 = 28;
const isLoggedIn3 = true;
const message = name3 + ' is ' + age3 + ' and logged in: ' + isLoggedIn3;
console.log(message);

// ============================================
// COMMON MISTAKES TO AVOID
// ============================================

// ❌ MISTAKE 1: Forgetting quotes around strings
// const name = Jordan;  // Error: Jordan is not defined

// ❌ MISTAKE 2: Using quotes around numbers (makes them strings)
// const age = "28";  // This is a string, not a number!
// console.log(age + 1);  // Would output "281" instead of 29

// ❌ MISTAKE 3: Using wrong boolean values
// const isLoggedIn = "true";  // This is a string, not a boolean!
// const isLoggedIn = True;    // Error: True is not defined (must be lowercase)

// ✅ CORRECT: Use proper types
const correctName = 'Jordan';      // String in quotes
const correctAge = 28;             // Number without quotes
const correctIsLoggedIn = true;    // Boolean (lowercase true/false)

