/**
 * VIDEO 1: Variables & Data Types - Variable Declarations
 *
 * This file demonstrates the different ways to declare variables in JavaScript.
 * Think of variables as labeled boxes where you store information.
 */

// ============================================
// VARIABLE DECLARATION TYPES
// ============================================

// 1. let - Use this when you might change the value later
// "let" means "allow this to change"
let name = "Alex";
console.log("Name:", name);

// You can change a let variable
name = "Alexandra";
console.log("Updated name:", name);

// 2. const - Use this when the value should never change
// "const" means "constant" or "fixed"
const age = 25;
console.log("Age:", age);

// Try to change a const variable - this will cause an error!
// age = 26; // ❌ This will throw: TypeError: Assignment to constant variable.

// 3. var - Old way of declaring variables (avoid in modern code)
// "var" is from older JavaScript - it has some confusing behavior
var isLearning = true;
console.log("Is learning:", isLearning);
